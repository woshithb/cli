import {
  CmdController,
  EventController,
  NodeVersionController,
  ParseController,
} from '@lib/controllers';
import {BeanManager} from '@lib/context'

class StdIOPresenter {
  constructor() {
    this.beanManager = new BeanManager({
      beans: [
        CmdController,
        EventController,
        NodeVersionController,
        ParseController
      ]
    })
  }

  private beanManager: BeanManager
}