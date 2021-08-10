import {BeanTrunk} from '@src/trunks';
import {
  ProjectBuildLifeCycleEnums,
  ProjectInitializeLifeCycle,
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
    this.eventController.on(ProjectInitializeLifeCycle.afterCommanderInitialize, contextParams => {
      this.cmdController.registerCmd(this);
      return contextParams;
    })
    this.eventController.on(ProjectInitializeLifeCycle.onPluginsRegister, contextParams => {
      this.plugins.forEach(plugin => plugin.apply(this));
      return contextParams
    })
  }

  public paddle() {
    const {contextParams} = this.parseController;
    return this.eventController.dispatchAsyncWaterfall(contextParams, this.lifeCycleEnums);
  }
}