import {BaseController} from '@lib/context';
import {Bean} from '@lib/util';
import {BeanName} from '@lib/util';

@Bean(BeanName.NodeVersionController)
export class NodeVersionController implements BaseController {
  public destroy() {
  }
}