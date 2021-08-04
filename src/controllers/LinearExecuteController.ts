import {EventController, ParseController} from '@src/controllers';
import {AutoWired, Bean, BeanName, ProjectInitializeLifeCycle} from '@src/util';
import {PaddleTrunk} from '@src/trunks';
import {BaseIterable, stage} from '@src/context';

@Bean(BeanName.LinearExecuteController)
export class LinearExecuteController extends BaseIterable<ProjectInitializeLifeCycle> {

  @AutoWired(BeanName.EventController)
  private eventController: EventController

  @AutoWired(BeanName.ParseController)
  private parseController: ParseController

  protected currentPointer = 0

  private contextArgs: any

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

  public syncContextArgs(contextArgs: any) {
    this.contextArgs = contextArgs
  }

  public destroy() {
    this.currentPointer = 0;
  }
}