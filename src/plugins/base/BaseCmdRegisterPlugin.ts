import {BasePlugin} from '@src/context';
import {PaddleTrunk} from '@src/trunk'

export abstract class BaseCmdRegisterPlugin implements BasePlugin<PaddleTrunk>{

  public abstract description: string

  public abstract action(name: any, cmd: any): void

  apply(context: PaddleTrunk) {
    context.cmdController.registerCmdPlugin(this)
  }
}