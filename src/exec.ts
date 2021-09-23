import {PaddleTrunk} from '@src/trunks';
import {
  CmdController,
  EventController,
  NodeVersionController,
  ParseController,
  PrintInfoController,
  PluginsController,
} from '@src/controllers';
import {
  CreateDirectoryActionPlugin,
  DirectoryCheckPlugin,
  EnsurePlatformPlugin,
  BaseFrameworkSelectionPlugin,
  UIFrameworkSelectionPlugin,
  StateManagementSelectionPlugin,
  PackWaySelectionPlugin,
  NodeModulesPatchPlugin,
  NodeUpdatePlugin,
  EmitProjectFilePlugin,
} from '@src/plugins';
import {
  CreateActionCmd,
} from '@src/cmd';
import {BeanName} from '@src/util';

const paddleTrunk = new PaddleTrunk({
  beans: [
    CmdController,
    EventController,
    NodeVersionController,
    ParseController,
    PrintInfoController,
    PluginsController
  ],
  seeds: {
    [BeanName.CmdOptions]: [
      new CreateActionCmd(),
    ],
    [BeanName.Plugins]: [
      new DirectoryCheckPlugin(),
      new CreateDirectoryActionPlugin(),
      new EnsurePlatformPlugin(),
      new BaseFrameworkSelectionPlugin(),
      new UIFrameworkSelectionPlugin(),
      new StateManagementSelectionPlugin(),
      new PackWaySelectionPlugin(),
      new NodeModulesPatchPlugin(),
      new NodeUpdatePlugin(),
      new EmitProjectFilePlugin()
    ]
  },
})

paddleTrunk.paddle().then(() => paddleTrunk.printInfoController.printProjectInitializedInfo())