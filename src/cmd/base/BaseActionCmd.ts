export abstract class BaseActionCmd {
  public abstract description: string

  public abstract command: string

  public abstract action: (args: any) => void
}