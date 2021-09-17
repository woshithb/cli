import {BasePlugin} from '@src/context';
import {PaddleTrunk} from '@src/trunks';
import {ProjectInitializeLifeCycle} from '@src/util';
import {IContextParams} from '@src/controllers';
import {BasePatch, StatementManagementPatch, WebpackPatch, VitePatch} from '@src/patches';

export class NodeModulesPatchPlugin extends BasePlugin<PaddleTrunk> {

  public apply(paddleTrunk: PaddleTrunk) {
    paddleTrunk.eventController.on(ProjectInitializeLifeCycle.beforeEmitFile, (contextParams: IContextParams) => {
      NodeModulesPatchPlugin.patchNecessaryModules(contextParams);
    })
  }

  private static patchNecessaryModules(contextParams: IContextParams) {
    contextParams.extraNodeModules = [];
    const patches: BasePatch<IContextParams>[] = [
      new StatementManagementPatch(),
      new WebpackPatch(),
      new VitePatch(),
    ]
    return patches.reduce((contextParams, patch) => {
      return patch.doPatch(contextParams)
    }, contextParams)
  }
}