import {BasePlugin} from '@src/context';
import {PaddleTrunk} from '@src/trunks';
import {ProjectInitializeLifeCycle} from '@src/util';
import {IContextParams} from '@src/controllers';
import {execSync} from 'child_process';

export class EmitProjectFilePlugin implements BasePlugin<PaddleTrunk> {

  public apply(paddleTrunk: PaddleTrunk) {
    paddleTrunk.eventController.on(ProjectInitializeLifeCycle.beforeEmitFile, (contextParams: IContextParams) => {
      EmitProjectFilePlugin.execInitCmd(paddleTrunk, contextParams)
    });
    paddleTrunk.eventController.on(ProjectInitializeLifeCycle.onEmitFile, (contextParams: IContextParams) => {
      EmitProjectFilePlugin.onEmitFile(paddleTrunk, contextParams);
    });
  }

  static execInitCmd(paddleTrunk: PaddleTrunk, contextParams: IContextParams) {
    execSync(`cd ${paddleTrunk.parseController.projectDirectory} && npm init -y`, {
      stdio: 'inherit'
    });
    return contextParams;
  }

  static onEmitFile(paddleTrunk: PaddleTrunk, contextParams: IContextParams) {
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
    execSync(`cd ${paddleTrunk.parseController.projectDirectory} && npm i -D ${devModules} && npm i ${productModules}`, {
      stdio: 'inherit'
    })
    return contextParams
  }
}