import {BaseActionCmd} from '@src/cmd';

export class CreateCmd implements BaseActionCmd {
  public description = 'create your project easily!'

  public command = 'create <app-name>'

  public action(args) {
    console.log(args)
  }
}