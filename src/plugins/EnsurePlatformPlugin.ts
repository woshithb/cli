import {InteractivePlugin} from '@src/plugins';
import {PaddleTrunk} from '@src/trunks';
import inquirer from 'inquirer';
import {ProjectInitializeLifeCycle} from '@src/util';

export class EnsurePlatformPlugin extends InteractivePlugin{
  public apply(paddleTrunk: PaddleTrunk) {
    super.apply(paddleTrunk);
    paddleTrunk.eventController.on(ProjectInitializeLifeCycle.beforeEnsurePlatform)
  }

  protected getPrompt(): inquirer.Question {
    return undefined;
  }
}