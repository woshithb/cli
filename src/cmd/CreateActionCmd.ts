import {BaseActionCmd} from '@src/cmd';
import {PaddleTrunk} from '@src/trunks';
import {ProjectInitializeLifeCycle} from '@src/util';
import {IContextParams} from '@src/controllers';
import path from 'path';
import {existsSync, ensureDir, mkdir} from 'fs-extra';

export class CreateActionCmd extends BaseActionCmd {
  protected description = 'create your project easily!'

  protected command = 'create <app-name>'

  protected action(paddleTrunk: PaddleTrunk, args: any[]) {
    this.registerBeforeDirectoryCheck(paddleTrunk, args);
    this.registerOnDirectoryCheck(paddleTrunk, args);
  }

  private registerBeforeDirectoryCheck(paddleTrunk: PaddleTrunk, args: any[]) {
    paddleTrunk.eventController.on(ProjectInitializeLifeCycle.beforeDirectoryCheck, (contextParams: IContextParams) => {
      paddleTrunk.printInfoController.printPrepareCreateDirectoryInfo();
      return contextParams;
    })
  }

  private registerOnDirectoryCheck(paddleTrunk: PaddleTrunk, args: any[]) {
    paddleTrunk.eventController.on(ProjectInitializeLifeCycle.onDirectoryCheck, async (contextParams: IContextParams) => {
      contextParams.directory = args[0];
      await CreateActionCmd.checkAndCreateDirectory(paddleTrunk, contextParams);
      return contextParams;
    })
  }

  private static async checkAndCreateDirectory(paddleTrunk: PaddleTrunk, contextParams: IContextParams) {
    if (contextParams.forceCreate) {
      await ensureDir(path.resolve(process.cwd(), contextParams.directory));
      paddleTrunk.printInfoController.printDirectoryCreatedSuccessfullyInfo();
    } else {
      const projectPath = path.resolve(process.cwd(), contextParams.directory);
      const isExist = await existsSync(projectPath);
      if (isExist) {
        paddleTrunk.printInfoController.printDirectoryCreatedFailedInfo();
        process.exit(0);
      } else {
        await mkdir(projectPath);
        paddleTrunk.printInfoController.printDirectoryCreatedSuccessfullyInfo();
      }
    }
  }
}