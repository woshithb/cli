import {InteractivePlugin} from '@src/plugins';
import {PaddleTrunk} from '@src/trunks';
import inquirer from 'inquirer';
import {ProjectInitializeLifeCycle, platformPrompts} from '@src/util';
import {IContextParams} from '@src/controllers';

export class EnsurePlatformPlugin extends InteractivePlugin<inquirer.RawListQuestion>{
  public apply(paddleTrunk: PaddleTrunk) {
    super.apply(paddleTrunk);
    paddleTrunk.eventController.on(ProjectInitializeLifeCycle.onEnsurePlatform, async (contextParams: IContextParams) => {
      const answer = await inquirer.prompt(this.getPrompts());
      contextParams.platform = answer.platform
    })
  }

  protected getPrompts(): inquirer.RawListQuestion[] {
    return [platformPrompts];
  }
}