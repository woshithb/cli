import {BeanTrunk} from '@src/trunks';
import {ProjectInitializeLifeCycle} from '@src/util';

export class PaddleTrunk extends BeanTrunk {
  constructor(option) {
    super(option);
    this.postConstruct();
  }

  private postConstruct() {
    this.eventController.on(ProjectInitializeLifeCycle.onPluginsRegister, () => {
      this.plugins.forEach(plugin => plugin.apply(this))
    })
  }
}