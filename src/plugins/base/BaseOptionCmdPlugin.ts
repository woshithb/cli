import {BasePlugin} from '@src/context';
import {PaddleTrunk} from '@src/trunk';

export abstract class BaseOptionCmdPlugin implements BasePlugin<PaddleTrunk> {
  public abstract option: string

  public apply(context: PaddleTrunk) {
    context.cmdController.registerOptionPlugin(this)
  }
}