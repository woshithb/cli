import {InteractivePlugin} from '@src/plugins';
import {PaddleTrunk} from '@src/trunks';
import inquirer from 'inquirer';
import {Platform, ProjectInitializeLifeCycle, UIFramework, uiFrameworkPrompts} from '@src/util';
import {IContextParams} from '@src/controllers';

export class UIFrameworkSelectionPlugin extends InteractivePlugin<inquirer.CheckboxQuestion> {

  private webUIFrameworkPrompts = [
    UIFramework.antd,
    UIFramework.element,
  ]

  private miniProgramUIFramework = [
    UIFramework.antd_mobile,
    UIFramework.mint_ui,
  ]

  protected prompt: inquirer.CheckboxQuestion = uiFrameworkPrompts

  public apply(paddleTrunk: PaddleTrunk) {
    super.apply(paddleTrunk);
    this.registerBeforeSelectUIFramework(paddleTrunk);
    this.registerOnSelectUIFramework(paddleTrunk);
  }

  private registerBeforeSelectUIFramework(paddleTrunk: PaddleTrunk) {
    paddleTrunk.eventController.on(ProjectInitializeLifeCycle.beforeSelectUIFramework, (contextParams: IContextParams) => {
      this.promptsTreeShakingByPlatform(contextParams);
      return contextParams;
    })
  }

  private registerOnSelectUIFramework(paddleTrunk: PaddleTrunk) {
    paddleTrunk.eventController.on(ProjectInitializeLifeCycle.onSelectUIFramework, async (contextParams: IContextParams) => {
      const answer = await inquirer.prompt(this.prompt);
      contextParams.uiFrameWork = answer.uiFramework;
      return contextParams;
    })
  }

  private promptsTreeShakingByPlatform(contextParams: IContextParams) {
    if (contextParams.platform === Platform.web) {
      this.prompt.choices = this.webUIFrameworkPrompts;
      this.prompt.default = [UIFramework.antd];
    } else {
      this.prompt.choices = this.miniProgramUIFramework;
      this.prompt.default = [UIFramework.antd_mobile];
    }
  }
}