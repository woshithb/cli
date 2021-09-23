import {BasePlugin} from '@src/context';
import {PaddleTrunk} from '@src/trunks';
import {ProjectInitializeLifeCycle} from '@src/util';
import {IContextParams} from '@src/controllers';
import util from 'util';
import {exec} from 'child_process';

export class EmitProjectFilePlugin implements BasePlugin<PaddleTrunk> {

  private asyncExec = util.promisify(exec);

  public apply(paddleTrunk: PaddleTrunk) {
    paddleTrunk.eventController.on(ProjectInitializeLifeCycle.beforeEmitFile, async (contextParams: IContextParams) => {
      await this.execInitCmd(paddleTrunk, contextParams)
    });
    paddleTrunk.eventController.on(ProjectInitializeLifeCycle.onEmitFile, async (contextParams: IContextParams) => {
      await this.onEmitFile(paddleTrunk, contextParams);
    });
  }

  private async execInitCmd(paddleTrunk: PaddleTrunk, contextParams: IContextParams) {
    await this.asyncExec(`cd ${paddleTrunk.parseController.projectDirectory} && npm init -y`);
    return contextParams;
  }

  private async onEmitFile(paddleTrunk: PaddleTrunk, contextParams: IContextParams) {
    const devModules = [
      contextParams.packWay,
      ...contextParams.extraNodeModules.devDependencies,
    ].join(' ')
    const productModules = [
      contextParams.baseFramework,
      ...contextParams.uiFrameWork,
      ...contextParams.stateManagement,
      ...contextParams.extraNodeModules.dependencies
    ].join(' ')
    await this.asyncExec(`cd ${paddleTrunk.parseController.projectDirectory} && npm i -D ${devModules} && npm i ${productModules}`)
    return contextParams
  }
}