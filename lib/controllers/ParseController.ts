import {BaseController} from '@lib/context';
import {Bean} from '@lib/util';
import {BeanName} from '@lib/util';

@Bean(BeanName.ParseController)
export class ParseController implements BaseController {
  public destroy() {
  }
}