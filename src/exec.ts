import {PaddleTrunk} from '@src/trunks';
import {
  CmdController,
  EventController,
  NodeVersionController,
  ParseController,
  PrintInfoController,
} from '@src/controllers';
import {
  CreateDirectoryActionPlugin,
  DirectoryCheckPlugin,
  EnsurePlatformPlugin,
  BaseFrameworkSelectionPlugin,
  UIFrameworkSelectionPlugin,
} from '@src/plugins';
import {
  CreateActionCmd
} from '@src/cmd';
import {BeanName} from '@src/util';

const paddleTrunk = new PaddleTrunk({
  beans: [
    CmdController,
    EventController,
    NodeVersionController,
    ParseController,
    PrintInfoController
  ],
  seeds: {
    [BeanName.CmdOptions]: {
      actions: [
        new CreateActionCmd(),
      ],
      options: []
    }
  },
  plugins: [
    new DirectoryCheckPlugin(),
    new CreateDirectoryActionPlugin(),
    new EnsurePlatformPlugin(),
    new BaseFrameworkSelectionPlugin(),
    new UIFrameworkSelectionPlugin(),
  ]
})

paddleTrunk.paddle().then(() => console.log('构建完毕'))