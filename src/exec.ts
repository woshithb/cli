import {PaddleTrunk} from '@src/trunks';
import {
  CmdController,
  EventController,
  NodeVersionController,
  ParseController,
} from '@src/controllers';
import {
  CreateActionCmdPlugin,
} from '@src/plugins'

const paddleTrunk = new PaddleTrunk({
  beans: [
    CmdController,
    EventController,
    NodeVersionController,
    ParseController
  ],
  plugins: [
    new CreateActionCmdPlugin
  ]
})