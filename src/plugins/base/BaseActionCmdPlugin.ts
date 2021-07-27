import {BasePlugin} from '@src/context';
import {PaddleTrunk} from '@src/trunks';

export abstract class BaseActionCmdPlugin extends BasePlugin<PaddleTrunk>{

  public abstract command: string

  public abstract description: string

  public abstract action(name: any, cmd: any): void

  public apply(context: PaddleTrunk) {
    context.cmdController.registerActionPlugin(this)
  }
}