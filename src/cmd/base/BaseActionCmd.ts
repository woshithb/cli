import {PaddleTrunk} from '@src/trunks';

export abstract class BaseActionCmd {
  protected abstract actionDescription: string

  protected abstract command: string

  protected abstract action(paddleTrunk: PaddleTrunk, args: any[]): void

  protected abstract optionDescription: string

  protected abstract flags: string

  protected abstract defaultValue: string | boolean

  public getActionCmdOptions() {
    return {
      actionDescription: this.actionDescription,
      command: this.command,
      action: this.action,
      optionDescription: this.optionDescription,
      flags: this.flags,
      defaultValue: this.defaultValue
    }
  }
}