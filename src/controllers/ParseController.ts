import {BaseController} from '@src/context';
import {Bean, BeanName, ProjectMode} from '@src/util';

export interface IContextParams {
  mode?: ProjectMode,
  directory?: string,
  forceCreate?: boolean,
  isExist?: boolean,
}

@Bean(BeanName.ParseController)
export class ParseController implements BaseController {

  public contextParams: IContextParams = {}

  public destroy() {
  }
}