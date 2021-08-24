export enum BeanName {
  CmdController = 'CmdController',
  EventController = 'EventController',
  NodeVersionController = 'NodeVersionController',
  ParseController = 'ParseController',
  PrintInfoController = 'PrintInfoController',
  CmdOptions = 'CmdOptions',
}

export enum ProjectMode {
  initialize = 'initialize',
  build = 'build',
}

export enum ProjectInitializeLifeCycle {
  beforeDirectoryCheck = 'beforeDirectoryCheck',
  onDirectoryCheck = 'onDirectoryCheck',
  afterDirectoryCheck = 'afterDirectoryCheck',
  beforeEnsurePlatform = 'beforeEnsurePlatform',
  onEnsurePlatform = 'onEnsurePlatform',
  afterEnsurePlatform = 'afterEnsurePlatform',
  beforeSelectBaseFramework = 'beforeSelectBaseFramework',
  onSelectBaseFramework = 'onSelectBaseFramework',
  afterSelectBaseFramework = 'afterSelectBaseFramework',
  beforeSelectUIFramework = 'beforeSelectUIFramework',
  onSelectUIFramework = 'onSelectUIFramework',
  afterSelectUIFramework = 'afterSelectUIFramework',
  beforeSelectStateManagement = 'beforeSelectStateManagement',
  onSelectStateManagement = 'onSelectStateManagement',
  afterSelectStateManagement = 'afterSelectStateManagement',
  beforeSelectPackingWay = 'beforeSelectPackingWay',
  onSelectPackingWay = 'onSelectPackingWay',
  afterSelectPackingWay = 'afterSelectPackingWay',
  beforeDirectoryCreate = 'beforeDirectoryCreate',
  onDirectoryCreate = 'onDirectoryCreate',
  afterDirectoryCreate = 'afterDirectoryCreate',
}

export const ProjectInitializeLifeCycleEnums = [
  ProjectInitializeLifeCycle.beforeDirectoryCheck,
  ProjectInitializeLifeCycle.onDirectoryCheck,
  ProjectInitializeLifeCycle.afterDirectoryCheck,
  ProjectInitializeLifeCycle.beforeEnsurePlatform,
  ProjectInitializeLifeCycle.onEnsurePlatform,
  ProjectInitializeLifeCycle.afterEnsurePlatform,
  ProjectInitializeLifeCycle.beforeSelectBaseFramework,
  ProjectInitializeLifeCycle.onSelectBaseFramework,
  ProjectInitializeLifeCycle.afterSelectBaseFramework,
  ProjectInitializeLifeCycle.beforeSelectUIFramework,
  ProjectInitializeLifeCycle.onSelectUIFramework,
  ProjectInitializeLifeCycle.afterSelectUIFramework,
  ProjectInitializeLifeCycle.beforeSelectStateManagement,
  ProjectInitializeLifeCycle.onSelectStateManagement,
  ProjectInitializeLifeCycle.afterSelectStateManagement,
  ProjectInitializeLifeCycle.beforeSelectPackingWay,
  ProjectInitializeLifeCycle.onSelectPackingWay,
  ProjectInitializeLifeCycle.afterSelectPackingWay,
  ProjectInitializeLifeCycle.beforeDirectoryCreate,
  ProjectInitializeLifeCycle.onDirectoryCreate,
  ProjectInitializeLifeCycle.afterDirectoryCreate,
]

export enum ProjectBuildLifeCycle {

}

export const ProjectBuildLifeCycleEnums = [

]

export enum Platform {
  web = 'web',
  miniProgram = 'mini-program'
}

export enum BaseFramework {
  react = 'react',
  vue = 'vue',
  taro = 'taro',
  remax = 'remax'
}

export enum UIFramework {
  antd = 'ant-design',
  element = 'elementUI',
  antd_mobile = 'ant-design-mobile',
  mint_ui = 'mint-ui',
}

export enum StateManagementLibrary {
  mobx = 'mobx',
  redux = 'redux',
  flutter = 'flutter',
  vuex = 'vuex',
}

export enum projectPackWay {
  webpack = 'webpack',
  vite = 'vite',
}
