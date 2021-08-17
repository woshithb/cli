import {InteractivePlugin} from '@src/plugins';
import inquirer from 'inquirer';
import {PaddleTrunk} from '@src/trunks';
import {ProjectInitializeLifeCycle, baseFrameworkPrompts} from '@src/util';
import {IContextParams} from '@src/controllers';

export class BaseFrameworkSelectionPlugin extends InteractivePlugin<inquirer.RawListQuestion>{
  public apply(paddleTrunk: PaddleTrunk) {
    super.apply(paddleTrunk);
    paddleTrunk.eventController.on(ProjectInitializeLifeCycle.beforeSelectBaseFramework, (contextParams: IContextParams) => {

    })
    paddleTrunk.eventController.on(ProjectInitializeLifeCycle.onSelectBaseFramework, async (contextParams: IContextParams) => {
      const answer = await inquirer.prompt(this.getPrompts());
      contextParams.baseFramework = answer.baseFramework;
    })
  }

  protected getPrompts(): inquirer.RawListQuestion[] {
    return [baseFrameworkPrompts];
  }
}