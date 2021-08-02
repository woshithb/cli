import {BaseMapManager, Destroyable} from './base';
import {ProjectLifeCycle} from '../util';

export type IEventListener = (context: any) => void | Promise<void>

export type IDisposer = () => void

export class EventEmitter extends BaseMapManager<ProjectLifeCycle, IEventListener[]> implements Destroyable {
  public destroy() {
    this.clear()
  }

  public on(time: ProjectLifeCycle, listener: IEventListener): IDisposer {
    if (!this.has(time)) {
      this.set(time, []);
    }
    this.get(time).push(listener);
    return () => this.off(time, listener)
  }

  public off(time: ProjectLifeCycle, listener: IEventListener) {
    if (this.has(time)) {
      const listeners = this.get(time);
      const index = listeners.indexOf(listener);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    }
  }

  public dispatch(time: ProjectLifeCycle, context: any) {
    if (this.has(time)) {
      this.get(time).forEach((listener => {
        listener(context);
      }))
    }
  }

  public dispatchAsync(time: ProjectLifeCycle, context: any): Promise<void[]> {
    if (this.has(time)) {
      return Promise.all(this.get(time).map(listener => listener(context)))
    }
    return Promise.all([])
  }
}