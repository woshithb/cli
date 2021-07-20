export abstract class BasePlugin<T> {
  public abstract apply(context: T): void
}