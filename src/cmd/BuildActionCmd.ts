import {BaseActionCmd} from '@src/cmd';

export class BuildActionCmd extends BaseActionCmd {
  protected actionDescription = ''

  protected command = 'build'

  protected action(args: any) {
    console.log('build')
  }

  protected flags = ''

  protected optionDescription = ''

  protected defaultValue = ''
}