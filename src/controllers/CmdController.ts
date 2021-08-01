import {BaseController} from '../context';
import {AutoWired, Bean, BeanName, PostConstruct, ProjectLifeCycle} from '../util';
import {EventController} from '../controllers';
import commander from 'commander';
import {BaseOptionCmdPlugin, BaseActionCmdPlugin} from '@src/plugins';

@Bean(BeanName.CmdController)
export class CmdController implements BaseController {

  @AutoWired(BeanName.EventController)
  private eventController: EventController

  private commander: commander.Command

  public destroy() {
  }

  @PostConstruct
  postConstruct() {
    this.eventController.on(ProjectLifeCycle.BeforeRegisterCmd, trunk => {
      this.initCommander();
      this.initVersion();
    })
    this.eventController.on(ProjectLifeCycle.AfterRegisterCmd, trunk => {
      this.commander.parse(process.argv)
    })
  }

  private initCommander() {
    this.commander = new commander.Command('created <app-name>')
  }

  private initVersion() {
    const _package_json_ = require('../../package.json');
    this.commander
      .version(_package_json_.version, '-v --version')
      .usage('<command> [options]')
  }

  public registerActionPlugin(plugin: BaseActionCmdPlugin) {
    this.commander
      .command(plugin.command)
      .description(plugin.description)
      .action((...args) => {
        plugin.action(args)
      })
  }

  public registerOptionPlugin(plugin: BaseOptionCmdPlugin) {
    this.commander.option(plugin.option);
  }
}