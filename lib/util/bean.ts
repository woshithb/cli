import {BaseController} from '@lib/context';

export type BeanProperty = {
  beanName: string;
  attributes: Array<BeanPropertyAttribute>;
  postConstruct: string | Symbol;
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

export function Bean(beanName: string): ClassDecorator {
  return function(beanConstructor) {
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

export function PostConstruct(target: Object, methodName: string | Symbol){
  getBeanProperty(target.constructor).postConstruct = methodName
}