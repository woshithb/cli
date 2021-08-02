import {BaseController} from '@src/context';

export type stage<T> = {value: T, done: boolean}

export abstract class BaseIterable<T> extends BaseController {

  protected abstract iterateNodes: T[]

  protected abstract iterate(): stage<T>

  public destroy() {
  }

}