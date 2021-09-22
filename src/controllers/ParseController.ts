import {BaseController} from '@src/context';
import {
  Bean,
  BeanName,
  ProjectMode,
  AutoWired,
  Platform,
  BaseFramework,
  UIFramework,
  StateManagementLibrary,
  ProjectPackWay
} from '@src/util';
import {CmdController} from '@src/controllers';

interface IExtraNodeModulesProps {
  devDependencies?: string[],
  dependencies?: string[]
}

export interface IContextParams {
  mode?: ProjectMode,
  directory?: string,
  forceCreate?: boolean,
  isDirectoryExist?: boolean,
  platform?: Platform,
  baseFramework?: BaseFramework,
  uiFrameWork?: UIFramework[],
  stateManagement?: StateManagementLibrary[],
  packWay?: ProjectPackWay,
  extraNodeModules?: IExtraNodeModulesProps
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