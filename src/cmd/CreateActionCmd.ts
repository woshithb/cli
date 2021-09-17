import {BaseActionCmd} from '@src/cmd';
import {PaddleTrunk} from '@src/trunks'
import {ProjectMode} from '@src/util';

export class CreateActionCmd extends BaseActionCmd {
  protected actionDescription = 'create your project easily!'

  protected command = 'create <app-name>'

  protected action(paddleTrunk: PaddleTrunk, args: any[]) {
    const {contextParams} = paddleTrunk.parseController;
    contextParams.mode = ProjectMode.initialize;
    contextParams.directory = args[0];
    contextParams.forceCreate = args[1].force;
  }

  protected flags = '-f, --force'

  protected defaultValue = false

  protected optionDescription = 'whether force create project directory'

}