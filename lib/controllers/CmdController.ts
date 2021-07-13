import {BaseController} from '@lib/context';
import {Bean, AutoWired, BeanName} from '@lib/util';
import {EventController} from '@lib/controllers'

@Bean(BeanName.CmdController)
export class CmdController implements BaseController {

  @AutoWired(BeanName.EventController)
  private eventController: EventController

  public destroy() {
  }
}