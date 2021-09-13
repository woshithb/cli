import {BeanManager, IBeanManagerConstructProps, BasePlugin} from '@src/context';
import {PaddleTrunk} from '@src/trunks';

export abstract class BaseTrunk {
  constructor(option: IBeanManagerConstructProps) {
    this.beanManager = new BeanManager({
      beans: option.beans,
      seeds: option.seeds
    })
  }

  protected beanManager: BeanManager

}