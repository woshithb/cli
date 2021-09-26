import {BasePatch} from '@src/patches';
import {IContextParams} from '@src/controllers';

export class VitePatch extends BasePatch<IContextParams> {

  protected when(contextParams: IContextParams): boolean {
    return false;
  }

  protected patch(contextParams: IContextParams) {
  }

}