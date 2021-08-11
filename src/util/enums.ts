export enum BeanName {
  CmdController = 'CmdController',
  EventController = 'EventController',
  NodeVersionController = 'NodeVersionController',
  ParseController = 'ParseController',
  PrintInfoController = 'PrintInfoController',
  CmdOptions = 'CmdOptions'
}

export enum ProjectMode {
  initialize = 'initialize',
  build = 'build',
}

export enum ProjectInitializeLifeCycle {
  beforeCommanderInitialize = 'beforeCommanderInitialized',
  onCommanderInitialize = 'onCommanderInitialize',
  afterCommanderInitialize = 'afterCommanderInitialize',
  beforePluginsRegister = 'beforeRegisterCmd',
  onPluginsRegister = 'onPluginsRegister',
  afterPluginsRegister = 'afterPluginsRegister',
  beforeDirectoryCheck = 'beforeDirectoryCheck',
  onDirectoryCheck = 'onDirectoryCheck',
  afterDirectoryCheck = 'afterDirectoryCheck',
  beforeDirectoryCreate = 'beforeDirectoryCreate',
  onDirectoryCreate = 'onDirectoryCreate',
  afterDirectoryCreate = 'afterDirectoryCreate',
}

export const ProjectInitializeLifeCycleEnums = [
  ProjectInitializeLifeCycle.beforeCommanderInitialize,
  ProjectInitializeLifeCycle.onCommanderInitialize,
  ProjectInitializeLifeCycle.afterCommanderInitialize,
  ProjectInitializeLifeCycle.beforePluginsRegister,
  ProjectInitializeLifeCycle.onPluginsRegister,
  ProjectInitializeLifeCycle.afterPluginsRegister,
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
