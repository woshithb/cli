import {BeanManager, IBeanManagerConstructProps, BasePlugin} from '@src/context';
import {BeanName} from '@src/util';

export abstract class BaseTrunk {
  constructor(option: IBeanManagerConstructProps) {
    this.beanManager = new BeanManager({
      beans: option.beans,
      seeds: {
        ...option.seeds,
        [BeanName.PaddleTrunk]: this
      }
    })
  }

  protected beanManager: BeanManager

}