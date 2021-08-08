import {BaseMapManager, Destroyable} from '@src/context';
import {ProjectInitializeLifeCycle} from '@src/util';
import {AsyncSeriesWaterfallHook} from 'tapable';

export type IWaterfallHook<T> = (contextParams: T) => T

export class EventEmitter extends BaseMapManager<
  ProjectInitializeLifeCycle,
  AsyncSeriesWaterfallHook<ProjectInitializeLifeCycle, any>
  > implements Destroyable {

  public destroy() {
    this.clear()
  }

  public on(lifeTime: ProjectInitializeLifeCycle, waterfallHook: IWaterfallHook<any>) {
    if (!this.has(lifeTime)) {
      this.set(lifeTime, new AsyncSeriesWaterfallHook())
    }
    this.get(lifeTime).tapPromise(requestId(), waterfallHook)
  }

  public async dispatchAsync(lifeTime: ProjectInitializeLifeCycle, contextParams: any) {
    if (!this.has(lifeTime)) {
      throw new Error(`没有找到${lifeTime}对应的hook`);
    }
    return this.get(lifeTime).promise(contextParams);
  }

  public async dispatchAsyncWaterfall(contextParams: any, lifeCycle: ProjectInitializeLifeCycle[]) {
    const asyncWaterfallHook = new AsyncSeriesWaterfallHook();
    lifeCycle.forEach(lifeTime => {
      asyncWaterfallHook.tapPromise(lifeTime, async (params) => {
        return this.dispatchAsync(lifeTime, params);
      })
    })
    return asyncWaterfallHook.promise(contextParams);
  }
}

function requestId(): string {
  return new Date().getTime().toString()
}