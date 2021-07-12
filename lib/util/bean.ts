import {BaseController} from '../context';

export type BeanProperty = {
  beanName: string;
  attributes: Array<BeanPropertyAttribute>;
  postConstruct: string;
  preDestroy: string;
};

export type BeanPropertyAttribute = {
  attributeName: string | symbol;
  beanName: string;
};

export function getBeanProperty(beanConstructor: Function): BeanProperty {
  if (!beanConstructor.prototype['_uniq_bean_property_key_']) {
    beanConstructor.prototype['_uniq_bean_property_key_'] = {};
  }

  return beanConstructor.prototype['_uniq_bean_property_key_'];
}

export function Bean(beanName: string) {
  return function(beanConstructor: new() => BaseController) {
    getBeanProperty(beanConstructor).beanName = beanName;
    return beanConstructor;
  }
}

export function AutoWired(beanName: string): PropertyDecorator {
  return function (target, propertyName) {
    const beanProperty = getBeanProperty(target.constructor);
    if (beanProperty.attributes) {
      beanProperty.attributes = []
    }
    beanProperty.attributes.push({
      attributeName: propertyName,
      beanName: beanName
    })
  }
}

export function PostConstruct(target: Object, methodName: string){
  getBeanProperty(target.constructor).postConstruct = methodName
}