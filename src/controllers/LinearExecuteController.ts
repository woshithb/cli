import {EventController} from '@src/controllers';
import {AutoWired, Bean, BeanName, ProjectInitializeLifeCycle} from '@src/util';
import {PaddleTrunk} from '@src/trunks';
import {BaseIterable, stage} from '@src/context';

@Bean(BeanName.LinearExecuteController)
export class LinearExecuteController extends BaseIterable<ProjectInitializeLifeCycle> {

  protected currentPointer = 0

  @AutoWired(BeanName.EventController)
  private eventController: EventController

  protected iterateNodes = [
    ProjectInitializeLifeCycle.beforePluginsRegister,
    ProjectInitializeLifeCycle.onPluginsRegister,
    ProjectInitializeLifeCycle.afterPluginsRegister,
    ProjectInitializeLifeCycle.beforeDirectoryCheck,
    ProjectInitializeLifeCycle.onDirectoryCheck,
    ProjectInitializeLifeCycle.afterDirectoryCheck,
  ]

  protected iterate(): stage<ProjectInitializeLifeCycle> {
    const value = this.iterateNodes[this.currentPointer];
    const done = this.currentPointer > this.iterateNodes.length - 1;
    return {value, done}
  }

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