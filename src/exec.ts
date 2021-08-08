import {PaddleTrunk} from '@src/trunks';
import {
  CmdController,
  EventController,
  NodeVersionController,
  ParseController,
} from '@src/controllers';
import {
  CreateDirectoryActionPlugin,
} from '@src/plugins';
import {
  CreateCmd
} from '@src/cmd';
import {BeanName} from '@src/util';

const paddleTrunk = new PaddleTrunk({
  beans: [
    CmdController,
    EventController,
    NodeVersionController,
    ParseController,
  ],
  seeds: {
    [BeanName.CmdOptions]: {
      actions: [
        new CreateCmd(),
      ],
      options: []
    }
  },
  plugins: [
    new CreateDirectoryActionPlugin()
  ]
})