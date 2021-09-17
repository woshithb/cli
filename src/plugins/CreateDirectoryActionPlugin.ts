import {BasePlugin} from '@src/context';
import {PaddleTrunk} from '@src/trunks';
import {ProjectInitializeLifeCycle} from '@src/util';
import {IContextParams} from '@src/controllers';
import path from 'path';
import {ensureDir, mkdir} from 'fs-extra';

export class CreateDirectoryActionPlugin implements BasePlugin<PaddleTrunk> {

  public apply(paddleTrunk: PaddleTrunk) {
    this.registerBeforeDirectoryCreate(paddleTrunk);
    this.registerOnDirectoryCreate(paddleTrunk);
    this.registerAfterDirectoryCreate(paddleTrunk);
  }

  private registerBeforeDirectoryCreate(paddleTrunk: PaddleTrunk) {
    paddleTrunk.eventController.on(ProjectInitializeLifeCycle.beforeDirectoryCreate, (contextParams: IContextParams) => {
      paddleTrunk.printInfoController.printPrepareCreateDirectoryInfo();
      return contextParams;
    })
  }

  private registerOnDirectoryCreate(paddleTrunk: PaddleTrunk) {
    paddleTrunk.eventController.on(ProjectInitializeLifeCycle.onDirectoryCreate, async (contextParams: IContextParams) => {
      await CreateDirectoryActionPlugin.createDirectory(paddleTrunk, contextParams);
      return contextParams;
    })
  }

  private registerAfterDirectoryCreate(paddleTrunk: PaddleTrunk) {
    paddleTrunk.eventController.on(ProjectInitializeLifeCycle.afterDirectoryCreate, (contextParams: IContextParams) => {
      paddleTrunk.printInfoController.printDirectoryCreatedSuccessfullyInfo();
    })
  }

  private static async createDirectory(paddleTrunk: PaddleTrunk, contextParams: IContextParams) {
    const projectPath = path.resolve(process.cwd(), contextParams.directory);
    try {
      if (!contextParams.isDirectoryExist) {
        await mkdir(projectPath)
      } else {
        paddleTrunk.printInfoController.printDeleteExistingDirectoryInfo();
        await ensureDir(projectPath);
      }
    } catch (err) {
      paddleTrunk.printInfoController.printError(err);
      process.exit(0);
    }
  }
}