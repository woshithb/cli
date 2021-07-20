import {BasePlugin, BasePresenter} from '@src/context';
import {BeanName} from '@src/util';
import {
  CmdController,
  EventController,
  NodeVersionController,
  ParseController,
} from '@src/controllers'

export class TrunkPresenter extends BasePresenter {

  public get cmdController() {
    return this.getBean(BeanName.CmdController) as CmdController
  }

  public get eventController() {
    return this.getBean(BeanName.EventController) as EventController
  }

  public get NodeVersionController() {
    return this.getBean(BeanName.NodeVersionController) as NodeVersionController
  }

  public get ParseController() {
    return this.getBean(BeanName.ParseController) as ParseController
  }

  private getBean(beanName: BeanName) {
    return this.beanManager.get(beanName).beanInstance
  }

  public registerPlugin(plugin: BasePlugin<BasePresenter>) {
    plugin.apply(this);
  }
}