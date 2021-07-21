import {TrunkPresenter} from '@src/trunk';
import {
  CmdController,
  EventController,
  NodeVersionController,
  ParseController,
} from '@src/controllers';

const trunkPresenter = new TrunkPresenter({
  beans: [
    CmdController,
    EventController,
    NodeVersionController,
    ParseController
  ]
})