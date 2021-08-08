export abstract class BaseOptionCmd {
  public abstract flags: string

  public abstract description: string

  public abstract defaultValue: string | boolean
}