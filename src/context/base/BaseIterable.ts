import {BaseController} from '@src/context';

export type stage<T> = {value: T, done: boolean}

export abstract class BaseIterable<T> implements BaseController {

  protected abstract iterateNodes: T[]

  public abstract iterate(): stage<T>

  public destroy() {
  }

}