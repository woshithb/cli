import {InteractivePlugin} from '@src/plugins';
import {PaddleTrunk} from '@src/trunks';
import inquirer from 'inquirer';
import {ProjectInitializeLifeCycle, platformPrompts} from '@src/util';
import {IContextParams} from '@src/controllers';

export class EnsurePlatformPlugin extends InteractivePlugin<inquirer.RawListQuestion>{

  protected prompts = platformPrompts

  public apply(paddleTrunk: PaddleTrunk) {
    super.apply(paddleTrunk);
    paddleTrunk.eventController.on(ProjectInitializeLifeCycle.onEnsurePlatform, async (contextParams: IContextParams) => {
      await this.syncPlatformInfo(contextParams);
      return contextParams;
    })
  }

  private async syncPlatformInfo(contextParams: IContextParams) {
    const answer = await inquirer.prompt(this.prompts);
    contextParams.platform = answer.platform
  }
}