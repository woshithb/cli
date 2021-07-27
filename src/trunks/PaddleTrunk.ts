import {BeanTrunk} from '@src/trunks';
import {TriggerTiming} from '@src/util';

export class PaddleTrunk extends BeanTrunk {

  private registerPlugins() {
    this.plugins.forEach(plugin => plugin.apply(this));
  }

  public prepare() {
    this.eventController.dispatch(TriggerTiming.BeforeRegisterCmd, this);
    this.registerPlugins();
    this.eventController.dispatch(TriggerTiming.BeforeRegisterCmd, this);
  }

  public workInProgress() {
    console.log('workInProgress');
  }

  public conclude() {
    console.log('conclude');
  }
}