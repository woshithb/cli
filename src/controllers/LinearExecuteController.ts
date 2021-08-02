import {BaseLinearExecuteController} from '@src/controllers';
import {ProjectLifeCycle, BeanName, Bean} from '@src/util';

@Bean(BeanName.LinearExecuteController)
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