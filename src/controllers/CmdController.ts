import {BaseController} from '../context';
import {AutoWired, Bean, BeanName, PostConstruct, TriggerTiming} from '../util';
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
    this.eventController.on(TriggerTiming.BeforeRegisterCmd, trunk => {
      this.initCommander();
      this.initVersion();
    })
    this.eventController.on(TriggerTiming.OnRegisterCmd, trunk => {

    })
    this.eventController.on(TriggerTiming.AfterRegisterCmd, trunk => {
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
      .description(plugin.description)
      .action((name, cmd) => {
        plugin.action(name, cmd)
      })
  }

  public registerOptionPlugin(plugin: BaseOptionCmdPlugin) {
    this.commander.option(plugin.option);
  }
}