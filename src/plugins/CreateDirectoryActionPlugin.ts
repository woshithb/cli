import {BasePlugin} from '@src/context';
import {PaddleTrunk} from '@src/trunks';
import {ProjectInitializeLifeCycle} from '@src/util';

export class CreateDirectoryActionPlugin implements BasePlugin<PaddleTrunk> {

  public apply(context: PaddleTrunk) {
    context.eventController.on(ProjectInitializeLifeCycle.onDirectoryCheck, args => {
      console.log(args);
    })
  }
}