import {InteractivePlugin} from '@src/plugins';
import {PaddleTrunk} from '@src/trunks';
import inquirer from "inquirer";

export class UIFrameWorkSelectionPlugin extends InteractivePlugin {

  public apply(context: PaddleTrunk) {

  }

  protected getPrompt(): inquirer.Question {
    return {}
  }
}