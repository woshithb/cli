import {Trunk} from '@src/trunk';
import {
  CmdController,
  EventController,
  NodeVersionController,
  ParseController,
} from '@src/controllers';

const trunkPresenter = new Trunk({
  beans: [
    CmdController,
    EventController,
    NodeVersionController,
    ParseController
  ]
})