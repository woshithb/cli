import {BaseActionCmd} from '@src/cmd';

export class BuildActionCmd extends BaseActionCmd {
  protected description = ''

  protected command = 'build'

  protected action(args: any) {
    console.log('build')
  }
}