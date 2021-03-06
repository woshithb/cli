import {BaseController} from '@src/context';
import {AutoWired, Bean, BeanName, PostConstruct, ProjectInitializeLifeCycle} from '@src/util';
import {EventController, ParseController} from '@src/controllers';
import commander from 'commander';
import {BaseActionCmd} from '@src/cmd';
import path from 'path';
import {PaddleTrunk} from '@src/trunks';

@Bean(BeanName.CmdController)
export class CmdController implements BaseController {

  @AutoWired(BeanName.Trunk)
  private paddleTrunk: PaddleTrunk

  @AutoWired(BeanName.EventController)
  private eventController: EventController

  @AutoWired(BeanName.ParseController)
  public parseController: ParseController

  @AutoWired(BeanName.CmdOptions)
  private cmdOptions: BaseActionCmd[]

  public commander: commander.Command

  public destroy() {
  }

  @PostConstruct
  private postConstruct() {
    this.initCommander();
    this.initVersion();
    this.registerCmd();
    this.parseController.parse();
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

  public registerCmd() {
    this.cmdOptions.forEach(actionCmd => {
      const config = actionCmd.getActionCmdOptions()
      this.commander
        .command(config.command)
        .description(config.actionDescription)
        .option(config.flags, config.optionDescription, config.defaultValue)
        .action((...args) => {
          config.action(this.paddleTrunk, args);
        })
    })
  }
}