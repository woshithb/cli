import {BaseController} from '../context';
import {Bean, BeanName} from '../util';

@Bean(BeanName.ParseController)
export class ParseController implements BaseController {
  public destroy() {
  }
}