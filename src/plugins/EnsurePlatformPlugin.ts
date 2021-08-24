import {InteractivePlugin} from '@src/plugins';
import {PaddleTrunk} from '@src/trunks';
import inquirer from 'inquirer';
import {ProjectInitializeLifeCycle, platformPrompts} from '@src/util';
import {IContextParams} from '@src/controllers';

export class EnsurePlatformPlugin extends InteractivePlugin<inquirer.RawListQuestion>{

  protected prompt = platformPrompts

  public apply(paddleTrunk: PaddleTrunk) {
    super.apply(paddleTrunk);
    this.registerOnEnsurePlatform(paddleTrunk);
  }

  private registerOnEnsurePlatform(paddleTrunk: PaddleTrunk) {
    paddleTrunk.eventController.on(ProjectInitializeLifeCycle.onEnsurePlatform, async (contextParams: IContextParams) => {
      await this.syncPlatformInfo(contextParams);
      return contextParams;
    })
  }

  private async syncPlatformInfo(contextParams: IContextParams) {
    const answer = await inquirer.prompt(this.prompt);
    contextParams.platform = answer.platform
  }
}