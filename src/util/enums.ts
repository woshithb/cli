export enum BeanName {
  CmdController = 'CmdController',
  EventController = 'EventController',
  NodeVersionController = 'NodeVersionController',
  ParseController = 'ParseController',
  CmdOptions = 'CmdOptions'
}

export enum ProjectMode {
  initialize = 'initialize',
  build = 'build',
}

export enum ProjectInitializeLifeCycle {
  beforePluginsRegister = 'beforeRegisterCmd',
  onPluginsRegister = 'onPluginsRegister',
  afterPluginsRegister = 'afterRegisterCmd',
  beforeDirectoryCheck = 'beforeDirectoryCheck',
  onDirectoryCheck = 'onDirectoryCheck',
  afterDirectoryCheck = 'afterDirectoryCheck',
}

export const ProjectInitializeLifeCycleEnums = [
  ProjectInitializeLifeCycle.beforePluginsRegister,
  ProjectInitializeLifeCycle.onPluginsRegister,
  ProjectInitializeLifeCycle.afterPluginsRegister,
  ProjectInitializeLifeCycle.beforeDirectoryCheck,
  ProjectInitializeLifeCycle.onDirectoryCheck,
  ProjectInitializeLifeCycle.afterDirectoryCheck,
]

export enum ProjectBuildLifeCycle {

}

export const ProjectBuildLifeCycleEnums = [

]
