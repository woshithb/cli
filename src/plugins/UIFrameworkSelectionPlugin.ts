import {InteractivePlugin} from '@src/plugins';
import {PaddleTrunk} from '@src/trunks';
import inquirer from 'inquirer';
import {uiFrameworkPrompts, ProjectInitializeLifeCycle} from '@src/util';
import {IContextParams} from '@src/controllers';

export class UIFrameworkSelectionPlugin extends InteractivePlugin<inquirer.CheckboxQuestion> {

  protected prompts: inquirer.CheckboxQuestion = uiFrameworkPrompts

  public apply(paddleTrunk: PaddleTrunk) {
    paddleTrunk.eventController.on(ProjectInitializeLifeCycle.beforeSelectUIFramework, (contextParams: IContextParams) => {

    })
    paddleTrunk.eventController.on(ProjectInitializeLifeCycle.onSelectUIFramework, (contextParams: IContextParams) => {

    })
  }
}