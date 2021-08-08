import {BeanManager, IBeanManagerConstructProps, BasePlugin} from '@src/context';
import {PaddleTrunk} from '@src/trunks';

export interface IBaseTrunkProps extends IBeanManagerConstructProps {
  plugins: BasePlugin<PaddleTrunk>[]
}

export abstract class BaseTrunk {
  constructor(option: IBaseTrunkProps) {
    this.beanManager = new BeanManager({
      beans: option.beans,
      seeds: option.seeds
    })
    this.plugins = option.plugins
  }

  protected beanManager: BeanManager

  protected plugins: BasePlugin<PaddleTrunk>[]
}