import {BeanManager, IBeanManagerConstructProps} from '@lib/context';

export class BasePresenter {
  constructor(option: IBeanManagerConstructProps) {
    this.beanManager = new BeanManager({
      beans: option.beans
    })
  }

  protected beanManager: BeanManager
}