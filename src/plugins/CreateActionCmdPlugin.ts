import {BaseActionCmdPlugin} from '@src/plugins';

export class CreateActionCmdPlugin extends BaseActionCmdPlugin {

  public command = 'create <app-name>'

  public description = 'create your project easily!'

  public action(args: any[]) {
    console.log(args);
  }
}