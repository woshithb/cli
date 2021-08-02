import {BaseLinearExecuteController, EventController} from '@src/controllers';
import {ProjectLifeCycle, BeanName, Bean, AutoWired} from '@src/util';
import {PaddleTrunk} from '@src/trunks';

@Bean(BeanName.LinearExecuteController)
export class LinearExecuteController extends BaseLinearExecuteController {

  @AutoWired(BeanName.EventController)
  private eventController: EventController

  protected iterateNodes = [
    ProjectLifeCycle.AfterRegisterCmd,
    ProjectLifeCycle.BeforeDirectoryCheck,
    ProjectLifeCycle.OnDirectoryCheck,
    ProjectLifeCycle.AfterDirectoryCheck
  ]

  public async iterateExecute(context: PaddleTrunk) {
    let stage = this.iterate();
    while (!stage.done) {
      await this.eventController.dispatchAsync(stage.value, context);
      stage = this.iterate();
    }
  }

  public destroy() {
    this.currentPointer = 0;
  }
}