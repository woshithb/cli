export interface Destroyable {
  destroy: () => void
}

export abstract class BaseController implements Destroyable{
  public abstract destroy(): void
}