import {BaseMapManager, BaseController} from './base';
import {getBeanProperty} from '../util';

interface IBaseBean<T>{
  beanName: string,
  beanClass: new() => T,
  beanInstance: T,
}

interface IBeanManagerConstructProps {
  beans: (new() => BaseController)[],
}

class BeanManager extends BaseMapManager<IBaseBean<BaseController>> {
  constructor(protected  option: IBeanManagerConstructProps) {
    super();
    this.init()
  }

  private init() {
    this.createBeans();
    this.wireBeans();
    this.postConstruct()
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
          //@ts-ignore
          baseBean.beanInstance[attribute.attributeName] = this.lookForBeanInstance(beanName);
        })
      }
    })
  }

  private lookForBeanInstance(beanName: string) {
    if (this.has(beanName)) {
      return this.get(beanName)
    }
    console.error(`找不到 ${beanName} 的 Bean 实例`);
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
