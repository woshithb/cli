import {BeanTrunk} from '@src/trunk';

export class PaddleTrunk extends BeanTrunk {

  private registerPlugins() {
    this.plugins.forEach(plugin => plugin.apply(this));
  }

  public prepare() {
    this.registerPlugins();
  }

  public workInProgress() {
    console.log('workInProgress');
  }

  public conclude() {
    console.log('conclude');
  }
}