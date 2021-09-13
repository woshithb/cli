import {BaseTrunk} from '@src/context';
import {AutoWired, BeanName} from '@src/util';
import {
  CmdController,
  EventController,
  NodeVersionController,
  ParseController,
  PrintInfoController
} from '@src/controllers';

export abstract class BeanTrunk extends BaseTrunk {

  @AutoWired(BeanName.EventController)
  public eventController: EventController

  @AutoWired(BeanName.ParseController)
  public parseController: ParseController

  @AutoWired(BeanName.PrintInfoController)
  public printInfoController: PrintInfoController

  // public get cmdController() {
  //   return this.getBean(BeanName.CmdController) as CmdController
  // }
  //
  // public get eventController() {
  //   return this.getBean(BeanName.EventController) as EventController
  // }
  //
  // public get nodeVersionController() {
  //   return this.getBean(BeanName.NodeVersionController) as NodeVersionController
  // }
  //
  // public get parseController() {
  //   return this.getBean(BeanName.ParseController) as ParseController
  // }
  //
  // public get printInfoController() {
  //   return this.getBean(BeanName.PrintInfoController) as PrintInfoController
  // }
  //
  // private getBean(beanName: BeanName) {
  //   return this.beanManager.get(beanName).beanInstance
  // }
}