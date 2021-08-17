import {BasePlugin} from '@src/context';
import {PaddleTrunk} from '@src/trunks';
import inquirer from 'inquirer';

export abstract class InteractivePlugin<T> implements BasePlugin<PaddleTrunk> {

  protected

  public apply(paddleTrunk: PaddleTrunk) {}

  protected abstract getPrompts(): T[]
}