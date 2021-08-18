import inquirer from 'inquirer';
import {BaseFramework, Platform, UIFramework} from '@src/util';

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

export const uiFrameworkPrompts: inquirer.CheckboxQuestion = {
  type: 'checkbox',
  name: 'uiFramework',
  message: 'choose your ui framework',
  default: [],
  choices: [
    UIFramework.antd,
    UIFramework.element,
    UIFramework.antd_mobile,
    UIFramework.mint_ui,
  ]
}