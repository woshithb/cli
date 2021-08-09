import {BeanTrunk} from '@src/trunks';
import {
  ProjectInitializeLifeCycle,
  ProjectMode,
  ProjectBuildLifeCycleEnums,
  ProjectInitializeLifeCycleEnums
} from '@src/util';

export class PaddleTrunk extends BeanTrunk {
  constructor(option) {
    super(option);
    this.postConstruct();
  }

  public get lifeCycleEnums() {
    const {contextParams} = this.parseController;
    if (contextParams.mode === ProjectMode.initialize) {
      return ProjectInitializeLifeCycleEnums
    } else {
      return ProjectBuildLifeCycleEnums
    }
  }

  private postConstruct() {
    this.eventController.on(ProjectInitializeLifeCycle.onPluginsRegister, () => {
      this.plugins.forEach(plugin => plugin.apply(this))
    })
  }

  public paddle() {
    const {contextParams} = this.parseController;
    return this.eventController.dispatchAsyncWaterfall(contextParams, this.lifeCycleEnums);
  }
}