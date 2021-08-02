import {BeanTrunk} from '@src/trunks';
import {ProjectLifeCycle} from '@src/util';

export class PaddleTrunk extends BeanTrunk {

  private registerPlugins() {
    this.plugins.forEach(plugin => plugin.apply(this));
  }

  protected prepare() {
    this.eventController.dispatch(ProjectLifeCycle.BeforeRegisterCmd, this);
    this.registerPlugins();
    this.eventController.dispatch(ProjectLifeCycle.BeforeRegisterCmd, this);
  }

  protected workInProgress() {
    console.log('workInProgress');
  }

  protected conclude() {
    console.log('conclude');
  }

  public execute() {

  }
}