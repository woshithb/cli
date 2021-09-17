import {BasePatch} from '@src/patches';
import {IContextParams} from '@src/controllers';
import {BaseFramework, StateManagementLibrary} from '@src/util';

export class StatementManagementPatch implements BasePatch<IContextParams> {

  private static when(contextParams: IContextParams): boolean {
    const {stateManagement} = contextParams;
    return !(stateManagement.length === 1 && stateManagement[0] === StateManagementLibrary.vuex);
  }

  private static patch(contextParams: IContextParams) {
    const {baseFramework, stateManagement} = contextParams;
    if (stateManagement.includes(StateManagementLibrary.mobx)) {
      if (baseFramework === BaseFramework.vue) {
        contextParams.extraNodeModules.push('mobx-vue');
      } else {
        contextParams.extraNodeModules.push('mobx-react');
      }
    }
    if (stateManagement.includes(StateManagementLibrary.redux)) {
      contextParams.extraNodeModules.push('react-redux');
    }
  }

  public doPatch(contextParams: IContextParams): IContextParams {
    if (StatementManagementPatch.when(contextParams)) {
      StatementManagementPatch.patch(contextParams);
    }
    return contextParams
  }
}