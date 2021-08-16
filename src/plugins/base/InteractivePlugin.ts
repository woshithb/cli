import {BasePlugin} from '@src/context';
import {PaddleTrunk} from '@src/trunks';
import inquirer from 'inquirer';

export abstract class InteractivePlugin implements BasePlugin<PaddleTrunk> {
  public apply(paddleTrunk: PaddleTrunk) {}

  protected abstract getPrompt(): inquirer.Question
}