import {BaseController} from '@src/context';
import {Bean, BeanName, ProjectMode, AutoWired} from '@src/util';
import {CmdController} from '@src/controllers';

export interface IContextParams {
  mode?: ProjectMode,
  directory?: string,
  forceCreate?: boolean,
  isExist?: boolean,
}

@Bean(BeanName.ParseController)
export class ParseController implements BaseController {

  @AutoWired(BeanName.CmdController)
  private cmdController: CmdController

  public contextParams: IContextParams = {}

  public parse() {
    this.cmdController.commander.parse(process.argv);
  }

  public destroy() {
  }
}