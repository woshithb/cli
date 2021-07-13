export interface Destroyable {
  destroy: () => void
}

export abstract class BaseController implements Destroyable{
  protected constructor() {
  }
  public abstract destroy(): void
}