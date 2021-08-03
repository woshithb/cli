import {PaddleTrunk} from '@src/trunks';
import {
  CmdController,
  EventController,
  NodeVersionController,
  ParseController,
  LinearExecuteController,
} from '@src/controllers';
import {
  CreateDirectoryActionPlugin,
} from '@src/plugins'

const paddleTrunk = new PaddleTrunk({
  beans: [
    CmdController,
    EventController,
    NodeVersionController,
    ParseController,
    LinearExecuteController
  ],
  plugins: [
    new CreateDirectoryActionPlugin()
  ]
})

paddleTrunk.execute().then(() => {
  process.exit(0)
})