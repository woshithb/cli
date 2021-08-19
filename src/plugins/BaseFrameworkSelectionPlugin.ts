import {InteractivePlugin} from '@src/plugins';
import inquirer from 'inquirer';
import {PaddleTrunk} from '@src/trunks';
import {BaseFramework, baseFrameworkPrompts, Platform, ProjectInitializeLifeCycle} from '@src/util';
import {IContextParams} from '@src/controllers';

export class BaseFrameworkSelectionPlugin extends InteractivePlugin<inquirer.RawListQuestion>{

  private webBaseFramework: BaseFramework[] = [
    BaseFramework.react,
    BaseFramework.vue,
  ]

  private miniProgramFramework: BaseFramework[] = [
    BaseFramework.taro,
    BaseFramework.remax
  ]

  protected prompt = baseFrameworkPrompts

  public apply(paddleTrunk: PaddleTrunk) {
    super.apply(paddleTrunk);
    paddleTrunk.eventController.on(ProjectInitializeLifeCycle.beforeSelectBaseFramework, (contextParams: IContextParams) => {
      this.promptsTreeShakingByPlatform(contextParams);
    })
    paddleTrunk.eventController.on(ProjectInitializeLifeCycle.onSelectBaseFramework, async (contextParams: IContextParams) => {
      const answer = await inquirer.prompt(this.prompt);
      contextParams.baseFramework = answer.baseFramework;
    })
  }

  private promptsTreeShakingByPlatform(contextParams: IContextParams) {
    if (contextParams.platform === Platform.web) {
      this.prompt.choices = this.webBaseFramework;
      this.prompt.default = BaseFramework.react
    } else {
      this.prompt.choices = this.miniProgramFramework;
      this.prompt.default = BaseFramework.taro;
    }
  }
}