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
      this.set(lifeTime, new AsyncSeriesWaterfallHook([lifeTime]))
    }
    this.get(lifeTime).tapPromise(requestId(), (contextParams: any) => {
      return Promise.resolve(waterfallHook(contextParams));
    })
  }

  public dispatchAsync(lifeTime: ProjectInitializeLifeCycle, contextParams: any) {
    if (!this.has(lifeTime)) {
      return Promise.resolve(contextParams)
    }
    return this.get(lifeTime).promise(contextParams);
  }

  public dispatchAsyncWaterfall(contextParams: any, lifeCycle: ProjectInitializeLifeCycle[]) {
    const asyncWaterfallHook = new AsyncSeriesWaterfallHook([contextParams.mode]);
    lifeCycle.forEach(lifeTime => {
      asyncWaterfallHook.tapPromise(lifeTime, (params) => {
        return Promise.resolve(this.dispatchAsync(lifeTime, params));
      })
    })
    return asyncWaterfallHook.promise(contextParams);
  }
}

function requestId(): string {
  return new Date().getTime().toString()
}