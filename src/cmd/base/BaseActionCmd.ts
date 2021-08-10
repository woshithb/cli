import {PaddleTrunk} from '@src/trunks';

export abstract class BaseActionCmd {
  protected abstract description: string

  protected abstract command: string

  protected abstract action(paddleTrunk: PaddleTrunk, args: any[]): void

  public getActionCmdOptions() {
    return {
      description: this.description,
      command: this.command,
      action: this.action
    }
  }
}