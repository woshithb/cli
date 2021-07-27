import {BaseController} from '@src/context';

export type stage<T> = {value: T, done: boolean}

export abstract class BaseIterable<T> extends BaseController {
  public abstract iterate(): stage<T>
}