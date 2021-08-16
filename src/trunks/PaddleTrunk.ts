import {BeanTrunk} from '@src/trunks';
import {
  ProjectBuildLifeCycleEnums,
  ProjectInitializeLifeCycleEnums,
  ProjectMode
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
    this.plugins.forEach(plugin => plugin.apply(this));
    this.cmdController.registerCmd(this);
    this.parseController.parse();
  }

  public paddle() {
    const {contextParams} = this.parseController;
    return this.eventController.dispatchAsyncWaterfall(contextParams, this.lifeCycleEnums);
  }
}