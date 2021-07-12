export = {}

class BaseMapManager<T> {
  constructor() {
    this.map = new Map<string, T>()
  }

  protected map: Map<string, T>

  protected has(key: string): boolean {
    return this.map.has(key)
  }

  protected set(key: string, value: T) {
    this.map.set(key, value)
  }

  protected get(key: string): T | undefined {
    return this.map.get(key)
  }

  protected delete(key: string): boolean {
    return this.map.delete(key);
  }

  protected clear(): void {
    this.map.clear()
  }

  protected forEach(callback: (value: T, key: string) => void) {
    this.map.forEach(callback)
  }
}

module.exports = BaseMapManager