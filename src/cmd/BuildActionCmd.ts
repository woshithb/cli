import {BaseActionCmd} from '@src/cmd';

export class BuildActionCmd implements BaseActionCmd {
  public description = ''

  public command = 'build'

  public action(args: any) {
    console.log('build')
  }
}