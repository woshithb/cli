export abstract class BaseOptionCmd {
  protected abstract flags: string

  protected abstract description: string

  protected abstract defaultValue: string | boolean

  public getOptionCmdOptions() {
    return {
      flags: this.flags,
      description: this.description,
      defaultValue: this.defaultValue
    }
  }
}