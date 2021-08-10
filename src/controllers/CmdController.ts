import {BaseController} from '@src/context';
import {AutoWired, Bean, BeanName, PostConstruct, ProjectInitializeLifeCycle} from '@src/util';
import {EventController} from '@src/controllers';
import commander from 'commander';
import {BaseActionCmd, BaseOptionCmd} from '@src/cmd';
import path from 'path';
import {PaddleTrunk} from '@src/trunks';

export interface ICmdOptions {
  actions: BaseActionCmd[],
  options: BaseOptionCmd[],
}

@Bean(BeanName.CmdController)
export class CmdController implements BaseController {

  @AutoWired(BeanName.EventController)
  private eventController: EventController

  @AutoWired(BeanName.CmdOptions)
  private cmdOptions: ICmdOptions

  private commander: commander.Command

  public destroy() {
  }

  @PostConstruct
  private postConstruct() {
    this.eventController.on(ProjectInitializeLifeCycle.onCommanderInitialize, contextParams => {
      this.initCommander();
      return contextParams;
    })
    this.eventController.on(ProjectInitializeLifeCycle.beforePluginsRegister, contextParams => {
      this.initVersion();
      return contextParams
    })
    this.eventController.on(ProjectInitializeLifeCycle.afterPluginsRegister, contextParams => {
      this.commander.parse(process.argv);
      return contextParams
    })
  }

  private initCommander() {
    this.commander = new commander.Command()
  }

  private initVersion() {
    const _package_json_ = require(path.resolve(__dirname, '../../../package.json'));
    this.commander
      .version(_package_json_.version, '-v --version')
      .usage('<command> [options]')
  }

  public registerCmd(paddleTrunk: PaddleTrunk) {
    const {actions, options} = this.cmdOptions
    actions.forEach(actionCmd => {
      const config = actionCmd.getActionCmdOptions()
      this.commander
        .command(config.command)
        .description(config.description)
        .action((...args) => {
          config.action(paddleTrunk, args);
        })
    })
    options.forEach(optionCmd => {
      const config = optionCmd.getOptionCmdOptions()
      this.commander.option(config.flags, config.description, config.defaultValue);
    })
  }
}