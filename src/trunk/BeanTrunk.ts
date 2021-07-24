import {BasePlugin, BaseTrunk} from '@src/context';
import {BeanName} from '@src/util';
import {
  CmdController,
  EventController,
  NodeVersionController,
  ParseController,
} from '@src/controllers';

export abstract class BeanTrunk extends BaseTrunk {

  public get cmdController() {
    return this.getBean(BeanName.CmdController) as CmdController
  }

  public get eventController() {
    return this.getBean(BeanName.EventController) as EventController
  }

  public get nodeVersionController() {
    return this.getBean(BeanName.NodeVersionController) as NodeVersionController
  }

  public get parseController() {
    return this.getBean(BeanName.ParseController) as ParseController
  }

  private getBean(beanName: BeanName) {
    return this.beanManager.get(beanName).beanInstance
  }
}