import {BaseMapManager, Destroyable} from './base';
import {ProjectInitializeLifeCycle} from '../util';

export type IEventListener<T> = (args: T) => void | Promise<void>

export type IDisposer = () => void

export class EventEmitter extends BaseMapManager<ProjectInitializeLifeCycle, IEventListener<any>[]> implements Destroyable {
  public destroy() {
    this.clear()
  }

  public on(time: ProjectInitializeLifeCycle, listener: IEventListener<any>): IDisposer {
    if (!this.has(time)) {
      this.set(time, []);
    }
    this.get(time).push(listener);
    return () => this.off(time, listener)
  }

  public off(time: ProjectInitializeLifeCycle, listener: IEventListener<any>) {
    if (this.has(time)) {
      const listeners = this.get(time);
      const index = listeners.indexOf(listener);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    }
  }

  public dispatch(time: ProjectInitializeLifeCycle, args: any) {
    if (this.has(time)) {
      this.get(time).forEach((listener => {
        listener(args);
      }))
    }
  }

  public dispatchAsync(time: ProjectInitializeLifeCycle, args: any): Promise<void[]> {
    if (this.has(time)) {
      return Promise.all(this.get(time).map(listener => listener(args)))
    }
    return Promise.all([])
  }
}