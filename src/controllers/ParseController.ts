import {BaseController} from '@src/context';
import {Bean, BeanName, ProjectMode} from '@src/util';

export interface IContextParams {
  mode?: ProjectMode
}

@Bean(BeanName.ParseController)
export class ParseController implements BaseController {

  public contextParams: IContextParams = {
    mode: ProjectMode.initialize
  }

  public destroy() {
  }
}