import {EventEmitter} from '../context';
import {Bean, BeanName} from '../util';

@Bean(BeanName.EventController)
export class EventController extends EventEmitter {

}