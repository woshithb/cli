import {BeanManager, BasePresenter, BasePlugin} from '@lib/context';
import {BeanName} from '@lib/util';

class TrunkPresenter extends BasePresenter {
  public getBean(beanName: BeanName) {
    return this.beanManager.get(beanName).beanInstance
  }

  public registerPlugin(plugin: BasePlugin<BasePresenter>) {
    plugin.apply(this);
  }
}