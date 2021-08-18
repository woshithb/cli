import {BasePlugin} from '@src/context';
import {PaddleTrunk} from '@src/trunks';

export abstract class InteractivePlugin<T> implements BasePlugin<PaddleTrunk> {

  protected abstract prompts: T

  public apply(paddleTrunk: PaddleTrunk) {}
}