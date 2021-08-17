import inquirer from 'inquirer';
import {BaseFramework, Platform} from '@src/util';

export const platformPrompts: inquirer.RawListQuestion = {
  type: 'rawlist',
  name: 'platform',
  message: 'choose your release platform',
  default: Platform.web,
  choices:[
    Platform.web,
    Platform.miniProgram
  ]
}

export const baseFrameworkPrompts: inquirer.RawListQuestion = {
  type: 'rawlist',
  name: 'baseFramework',
  message: 'choose your base framework',
  default: BaseFramework.react,
  choices: [
    BaseFramework.react,
    BaseFramework.vue,
    BaseFramework.taro,
    BaseFramework.remax
  ]
}