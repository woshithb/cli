export class BaseMapManager<T, P> {
  constructor() {
    this.map = new Map<T, P>()
  }

  protected map: Map<T, P>

  public has(key: T): boolean {
    return this.map.has(key)
  }

  public set(key: T, value: P) {
    this.map.set(key, value)
  }

  public get(key: T): P | undefined {
    return this.map.get(key)
  }

  public delete(key: T): boolean {
    return this.map.delete(key);
  }

  public clear(): void {
    this.map.clear()
  }

  public forEach(callback: (value: P, key: T) => void) {
    this.map.forEach(callback)
  }
}