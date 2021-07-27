import {BasePlugin} from '@src/context';
import {PaddleTrunk} from '@src/trunks';

export abstract class BaseOptionCmdPlugin extends BasePlugin<PaddleTrunk> {
  public abstract option: string

  public apply(context: PaddleTrunk) {
    context.cmdController.registerOptionPlugin(this)
  }
}