import {EventEmitter} from '@lib/context';
import {Bean} from '@lib/util';
import {BeanName} from '@lib/util';

@Bean(BeanName.EventController)
export class EventController extends EventEmitter {

}