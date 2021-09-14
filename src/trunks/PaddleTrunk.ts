import {BeanTrunk} from '@src/trunks';
import {
  ProjectBuildLifeCycleEnums,
  ProjectInitializeLifeCycleEnums,
  ProjectMode,
} from '@src/util';

export class PaddleTrunk extends BeanTrunk {

  public get lifeCycleEnums() {
    const {contextParams} = this.parseController;
    if (contextParams.mode === ProjectMode.initialize) {
      return ProjectInitializeLifeCycleEnums
    } else {
      return ProjectBuildLifeCycleEnums
    }
  }

  public paddle() {
    const {contextParams} = this.parseController;
    return this.eventController.dispatchAsyncWaterfall(contextParams, this.lifeCycleEnums);
  }
}