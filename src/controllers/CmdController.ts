import {BaseController} from '@src/context';
import {AutoWired, Bean, BeanName, PostConstruct, ProjectInitializeLifeCycle} from '@src/util';
import {EventController, LinearExecuteController} from '@src/controllers';
import commander from 'commander';
import {cmdCreator} from '@src/util';

@Bean(BeanName.CmdController)
export class CmdController implements BaseController {

  @AutoWired(BeanName.EventController)
  private eventController: EventController

  @AutoWired(BeanName.LinearExecuteController)
  public linearExecuteController: LinearExecuteController

  private commander: commander.Command

  public destroy() {
  }

  @PostConstruct
  private postConstruct() {
    this.eventController.on(ProjectInitializeLifeCycle.beforePluginsRegister, trunk => {
      this.initCommander();
      this.initVersion();
      this.registerCmd();
    })
    this.eventController.on(ProjectInitializeLifeCycle.afterPluginsRegister, trunk => {
      this.commander.parse(process.argv);
    })
  }

  private initCommander() {
    this.commander = new commander.Command()
  }

  private initVersion() {
    const _package_json_ = require('../../package.json');
    this.commander
      .version(_package_json_.version, '-v --version')
      .usage('<command> [options]')
  }

  private registerCmd() {
    const {actions = [], options = []} = cmdCreator(this);
    actions.forEach(config => {
      this.commander
        .command(config.command)
        .description(config.description)
        .action(config.action)
    })
    options.forEach(config => {
      this.commander.option(config.flags, config.description, config.defaultValue);
    })
  }
}