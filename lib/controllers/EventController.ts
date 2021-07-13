import {BaseController} from '@lib/context';
import {Bean} from '@lib/util';
import {BeanName} from '@lib/util';

@Bean(BeanName.EventController)
export class EventController implements BaseController {
  public destroy() {
  }
}