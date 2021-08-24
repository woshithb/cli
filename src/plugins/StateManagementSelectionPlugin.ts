import {InteractivePlugin} from '@src/plugins'
import {PaddleTrunk} from '@src/trunks';
import inquirer from 'inquirer';
import {BaseFramework, ProjectInitializeLifeCycle, StateManagementLibrary, stateManagementPrompts} from '@src/util';
import {IContextParams} from '@src/controllers';

export class StateManagementSelectionPlugin extends InteractivePlugin<inquirer.RawListQuestion> {

  private reactChoices = [
    StateManagementLibrary.mobx,
    StateManagementLibrary.redux,
    StateManagementLibrary.flutter
  ]

  private vueChoices = [
    StateManagementLibrary.mobx,
    StateManagementLibrary.vuex,
    StateManagementLibrary.flutter
  ]

  protected prompt = stateManagementPrompts

  public apply(paddleTrunk: PaddleTrunk) {
    super.apply(paddleTrunk);
    this.registerBeforeSelectStateManagement(paddleTrunk);
    this.registerOnSelectStateManagement(paddleTrunk);
  }

  private registerBeforeSelectStateManagement(paddleTrunk: PaddleTrunk) {
    paddleTrunk.eventController.on(ProjectInitializeLifeCycle.beforeSelectStateManagement, (contextParams: IContextParams) => {
      this.promptsTreeShakingByPlatform(contextParams);
      return contextParams;
    })
  }

  private registerOnSelectStateManagement(paddleTrunk: PaddleTrunk) {
    paddleTrunk.eventController.on(ProjectInitializeLifeCycle.onSelectStateManagement, async (contextParams: IContextParams) => {
      const answer = await inquirer.prompt(this.prompt);
      contextParams.stateManagement = answer.stateManagement;
      return contextParams;
    })
  }

  private promptsTreeShakingByPlatform(contextParams: IContextParams) {
    if (contextParams.baseFramework === BaseFramework.react) {
      this.prompt.choices = this.reactChoices;
    } else {
      this.prompt.choices = this.vueChoices;
    }
  }
}