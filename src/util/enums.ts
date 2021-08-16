export enum BeanName {
  CmdController = 'CmdController',
  EventController = 'EventController',
  NodeVersionController = 'NodeVersionController',
  ParseController = 'ParseController',
  PrintInfoController = 'PrintInfoController',
  CmdOptions = 'CmdOptions',
  Plugins = 'Plugins'
}

export enum ProjectMode {
  initialize = 'initialize',
  build = 'build',
}

export enum ProjectInitializeLifeCycle {
  beforeDirectoryCheck = 'beforeDirectoryCheck',
  onDirectoryCheck = 'onDirectoryCheck',
  afterDirectoryCheck = 'afterDirectoryCheck',
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
