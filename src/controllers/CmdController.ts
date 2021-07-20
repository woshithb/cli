import {BaseController} from '../context';
import {AutoWired, Bean, BeanName, PostConstruct, TriggerTiming} from '../util';
import {EventController} from '../controllers';
import commander from 'commander';

@Bean(BeanName.CmdController)
export class CmdController implements BaseController {

  @AutoWired(BeanName.EventController)
  private eventController: EventController

  private commander: commander.Command

  public destroy() {
  }

  @PostConstruct
  private registerCMD() {
    this.commander = new commander.Command('create <app-name>');
    this.commander
      .description('create your project easily')
      .action((name, cmd) => {
        console.log(name, cmd)
      })
  }
}