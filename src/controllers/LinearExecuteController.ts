import {BaseLinearExecuteController} from '@src/controllers';
import {ProjectLifeCycle} from '@src/util';

export class LinearExecuteController extends BaseLinearExecuteController {

  protected iterateNodes = [
    ProjectLifeCycle.BeforeRegisterCmd,
    ProjectLifeCycle.AfterRegisterCmd,
    ProjectLifeCycle.BeforeDirectoryCheck,
    ProjectLifeCycle.AfterDirectoryCheck
  ]

  public destroy() {
    this.currentPointer = 0;
  }
}