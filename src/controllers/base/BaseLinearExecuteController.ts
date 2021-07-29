import {BaseIterable, stage} from '@src/context';
import {ProjectLifeCycle} from '@src/util';

export abstract class BaseLinearExecuteController extends BaseIterable<ProjectLifeCycle> {

  protected currentPointer: number = 0

  public iterate(): stage<ProjectLifeCycle> {
    const value = this.iterateNodes[this.currentPointer];
    const done = this.currentPointer < this.iterateNodes.length - 1;
    return {value, done}
  }
}