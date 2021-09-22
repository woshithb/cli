import {BasePatch} from '@src/patches';
import {IContextParams} from '@src/controllers';
import {BaseFramework, StateManagementLibrary} from '@src/util';

export class StatementManagementPatch extends BasePatch<IContextParams> {

  protected when(contextParams: IContextParams): boolean {
    const {stateManagement} = contextParams;
    return !(stateManagement.length === 1 && stateManagement[0] === StateManagementLibrary.vuex);
  }

  protected patch(contextParams: IContextParams) {
    const {baseFramework, stateManagement} = contextParams;
    if (stateManagement.includes(StateManagementLibrary.mobx)) {
      if (baseFramework === BaseFramework.vue) {
        contextParams.extraNodeModules.dependencies.push('mobx-vue');
      } else {
        contextParams.extraNodeModules.dependencies.push('mobx-react');
      }
    }
    if (stateManagement.includes(StateManagementLibrary.redux)) {
      contextParams.extraNodeModules.dependencies.push('react-redux');
    }
  }
}