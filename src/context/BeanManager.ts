import {BaseMapManager, BaseController, Destroyable} from './base';
import {getBeanProperty, BeanName} from '@src/util';

interface IBaseBean<T>{
  beanName: string,
  beanClass: new() => T,
  beanInstance: T,
}

export interface IBeanManagerConstructProps {
  beans?: (new() => BaseController)[],
  seeds?: { [beanName: string]: any }
}

export class BeanManager extends BaseMapManager<string, IBaseBean<BaseController>> implements Destroyable{
  constructor(protected  option: IBeanManagerConstructProps) {
    super();
    this.init()
  }

  private init() {
    this.createBeans();
    this.wireBeans();
    this.postConstruct();
  }

  public destroy() {
    this.forEach((baseBean => {
      baseBean.beanInstance.destroy();
    }))
    this.clear();
  }

  private createBeans() {
    this.option.beans.forEach(beanClass => {
      const beanProperty = getBeanProperty(beanClass)
      this.set(beanProperty.beanName, {
        beanName: beanProperty.beanName,
        beanClass: beanClass,
        beanInstance: new beanClass(),
      })
    })
  }

  private wireBeans() {
    this.forEach((baseBean, beanName) => {
      const beanProperty = getBeanProperty(baseBean.beanClass);
      if (beanProperty.attributes) {
        beanProperty.attributes.forEach(attribute => {
          Reflect.set(baseBean.beanInstance, attribute.attributeName, this.lookForBeanInstance(attribute.beanName))
        })
      }
    })
    Object.keys(this.option.seeds).forEach(key => {
      const seedInstance = this.option.seeds[key];
      const beanProperty = getBeanProperty(seedInstance.constructor);
      if (beanProperty.attributes) {
        beanProperty.attributes.forEach(attribute => {
          Reflect.set(seedInstance, attribute.attributeName, this.lookForBeanInstance(attribute.beanName))
        })
      }
    })
  }

  private lookForBeanInstance(beanName: string) {
    if (this.option.seeds && this.option.seeds.hasOwnProperty(beanName)) {
      return this.option.seeds[beanName]
    }
    if (this.has(beanName)) {
      return this.get(beanName).beanInstance
    }
    console.error(`????????? ${beanName} ??? Bean ??????`);
  }

  private postConstruct() {
    this.forEach((({beanClass, beanInstance}) => {
      const beanProperty = getBeanProperty(beanClass);
      if (beanProperty.postConstruct && Reflect.has(beanInstance, beanProperty.postConstruct)) {
        const postConstruct = Reflect.get(beanInstance, beanProperty.postConstruct)
        Reflect.apply(postConstruct, beanInstance, [])
      }
    }))
  }
}
