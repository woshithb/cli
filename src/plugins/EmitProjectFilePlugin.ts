import {BasePlugin} from '@src/context';
import {PaddleTrunk} from '@src/trunks';
import {ProjectInitializeLifeCycle} from '@src/util';
import {IContextParams} from '@src/controllers';
import util from 'util';
import {exec} from 'child_process';

export class EmitProjectFilePlugin implements BasePlugin<PaddleTrunk> {
  public apply(paddleTrunk: PaddleTrunk) {
    paddleTrunk.eventController.on(ProjectInitializeLifeCycle.beforeEmitFile, EmitProjectFilePlugin.execInitCmd)
  }

  static async execInitCmd(contextParams: IContextParams) {
    const asyncExec = util.promisify(exec);
    await asyncExec('npm init -y');
  }
}