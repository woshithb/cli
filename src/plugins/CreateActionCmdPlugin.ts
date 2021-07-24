import {BaseActionCmdPlugin} from '@src/plugins';

export class CreateActionCmdPlugin extends BaseActionCmdPlugin {

  public description = 'created your project easily'

  public action(name: any, cmd: any) {
    console.log(name, cmd);
  }
}