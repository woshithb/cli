import {BaseIterable, stage} from '@src/context';

export abstract class BaseLinearExecuteController extends BaseIterable<any> {
  public iterate(): stage<any> {
    return undefined;
  }
}