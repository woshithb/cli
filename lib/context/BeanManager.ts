const {BaseMapManager, BaseController} = require('./base')

interface IBaseBean<T>{
  name: string,
  constructor: new() => T,
  instance: T,
}

export class BeanManager extends BaseMapManager<IBaseBean<InstanceType<typeof BaseController>>> {
  
}