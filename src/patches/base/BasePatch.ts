export abstract class BasePatch<T> {
  protected abstract when(contextParams: T): boolean

  protected abstract patch(contextParams: T): void

  public doPatch(contextParams: T): T {
    if (this.when(contextParams)) {
      this.patch(contextParams);
    }
    return contextParams
  }
}