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

}
