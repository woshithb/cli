import {BeanManager, IBeanManagerConstructProps, BasePlugin} from '@src/context';
import {PaddleTrunk} from '@src/trunk'

export interface IBaseTrunkProps extends IBeanManagerConstructProps {
  plugins: (new() => BasePlugin<PaddleTrunk>)[]
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

  public abstract prepare(): void

  public abstract workInProgress(): void

  public abstract conclude(): void
}