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

  @AutoWired(BeanName.CmdController)
  public cmdController: CmdController

  @AutoWired(BeanName.NodeVersionController)
  public nodeVersionController: NodeVersionController
}