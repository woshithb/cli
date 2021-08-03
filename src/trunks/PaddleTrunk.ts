import {BeanTrunk} from '@src/trunks';
import {PostConstruct} from '@src/util';
import {ProjectInitializeLifeCycle} from '@src/util';

export class PaddleTrunk extends BeanTrunk {

  @PostConstruct
  private postConstruct() {
    this.eventController.on(ProjectInitializeLifeCycle.onPluginsRegister, () => {
      this.plugins.forEach(plugin => plugin.apply(this))
    })
  }
}