export class BaseMapManager<T, P> {
  constructor() {
    this.map = new Map<T, P>()
  }

  protected map: Map<T, P>

  protected has(key: T): boolean {
    return this.map.has(key)
  }

  protected set(key: T, value: P) {
    this.map.set(key, value)
  }

  protected get(key: T): P | undefined {
    return this.map.get(key)
  }

  protected delete(key: T): boolean {
    return this.map.delete(key);
  }

  protected clear(): void {
    this.map.clear()
  }

  protected forEach(callback: (value: P, key: T) => void) {
    this.map.forEach(callback)
  }
}