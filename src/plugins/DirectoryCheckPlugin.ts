import {BasePlugin} from '@src/context';
import {PaddleTrunk} from '@src/trunks';
import {ProjectInitializeLifeCycle} from "@src/util";
import {IContextParams} from "@src/controllers";
import {existsSync} from 'fs-extra';
import path from 'path';

export class DirectoryCheckPlugin extends BasePlugin<PaddleTrunk> {
  public apply(paddleTrunk: PaddleTrunk) {
    this.registerBeforeDirectoryCheck(paddleTrunk);
    this.registerOnDirectoryCheck(paddleTrunk);
    this.registerAfterDirectoryCheck(paddleTrunk);
  }

  private registerBeforeDirectoryCheck(paddleTrunk: PaddleTrunk) {
    paddleTrunk.eventController.on(ProjectInitializeLifeCycle.beforeDirectoryCheck, (contextParams: IContextParams) => {
      paddleTrunk.printInfoController.printPrepareCheckDirectoryInfo();
      return contextParams;
    })
  }

  private registerOnDirectoryCheck(paddleTrunk: PaddleTrunk) {
    paddleTrunk.eventController.on(ProjectInitializeLifeCycle.onDirectoryCheck, (contextParams: IContextParams) => {
      DirectoryCheckPlugin.checkDirectory(paddleTrunk, contextParams);
      return contextParams;
    })
  }

  private registerAfterDirectoryCheck(paddleTrunk: PaddleTrunk) {
    paddleTrunk.eventController.on(ProjectInitializeLifeCycle.afterDirectoryCheck, (contextParams: IContextParams) => {
      if (!contextParams.forceCreate && contextParams.isDirectoryExist) {
        paddleTrunk.printInfoController.printExistDueToDirectoryExist();
        process.exit(0);
      }
    })
  }

  private static checkDirectory(paddleTrunk: PaddleTrunk, contextParams: IContextParams) {
    const projectPath = path.resolve(process.cwd(), contextParams.directory);
    contextParams.isDirectoryExist = existsSync(projectPath);
  }
}