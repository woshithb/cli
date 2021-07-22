import {BaseController} from '../context';
import {AutoWired, Bean, BeanName, PostConstruct, TriggerTiming} from '../util';
import {EventController} from '../controllers';
import commander from 'commander';
import {BaseCmdRegisterPlugin} from '@src/plugins'

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

    })
    this.eventController.on(TriggerTiming.OnRegisterCmd, trunk => {

    })
    this.eventController.on(TriggerTiming.AfterRegisterCmd, trunk => {
      this.commander.parse(process.argv)
    })
  }

  public registerCmdPlugin(plugin: BaseCmdRegisterPlugin) {
    this.commander = new commander.Command('create <app-name>');
    this.commander
      .description(plugin.description)
      .action((name, cmd) => {
        plugin.action(name, cmd)
      })
  }
}