import {BeanManager, IBeanManagerConstructProps} from '@src/context';

export class BasePresenter {
  constructor(option: IBeanManagerConstructProps) {
    this.beanManager = new BeanManager({
      beans: option.beans
    })
  }

  protected beanManager: BeanManager
}