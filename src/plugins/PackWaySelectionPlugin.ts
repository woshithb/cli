import {InteractivePlugin} from '@src/plugins';
import {packWayPrompts, ProjectInitializeLifeCycle} from '@src/util';
import inquirer from 'inquirer';
import {PaddleTrunk} from '@src/trunks';
import {IContextParams} from '@src/controllers';

export class PackWaySelectionPlugin extends InteractivePlugin<inquirer.RawListQuestion> {

  protected prompt = packWayPrompts

  public apply(paddleTrunk: PaddleTrunk) {
    super.apply(paddleTrunk);
    this.registerOnSelectPackingWay(paddleTrunk);
  }

  private registerOnSelectPackingWay(paddleTrunk: PaddleTrunk) {
    paddleTrunk.eventController.on(ProjectInitializeLifeCycle.onSelectPackingWay, async (contextParams: IContextParams) => {
      const answer = await inquirer.prompt(this.prompt);
      contextParams.packWay = answer.packWay
    })
  }
}