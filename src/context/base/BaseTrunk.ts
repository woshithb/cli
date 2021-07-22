import {BeanManager, IBeanManagerConstructProps} from '@src/context';

export class BaseTrunk {
  constructor(option: IBeanManagerConstructProps) {
    this.beanManager = new BeanManager({
      beans: option.beans
    })
  }

  protected beanManager: BeanManager

  protected prepare(): void {}

  protected workInProgress(): void {}

  protected conclude(): void {}
}