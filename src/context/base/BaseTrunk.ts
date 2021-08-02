import {BeanManager, IBeanManagerConstructProps, BasePlugin} from '@src/context';
import {PaddleTrunk} from '@src/trunks'

export interface IBaseTrunkProps extends IBeanManagerConstructProps {
  plugins: BasePlugin<PaddleTrunk>[]
}

export abstract class BaseTrunk {
  constructor(option: IBaseTrunkProps) {
    this.beanManager = new BeanManager({
      beans: option.beans
    })
    this.plugins = option.plugins
  }

  protected beanManager: BeanManager

  protected plugins: BasePlugin<PaddleTrunk>[]

  protected abstract prepare(): void

  protected abstract workInProgress(): void

  protected abstract conclude(): void
}