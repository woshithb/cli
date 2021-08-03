export enum BeanName {
  CmdController = 'CmdController',
  EventController = 'EventController',
  NodeVersionController = 'NodeVersionController',
  ParseController = 'ParseController',
  LinearExecuteController = 'LinearExecuteController',
}

export enum ProjectInitializeLifeCycle {
  beforePluginsRegister = 'beforeRegisterCmd',
  onPluginsRegister = 'onPluginsRegister',
  afterPluginsRegister = 'afterRegisterCmd',
  beforeDirectoryCheck = 'beforeDirectoryCheck',
  onDirectoryCheck = 'onDirectoryCheck',
  afterDirectoryCheck = 'afterDirectoryCheck',
}

export enum ProjectBuildLifeCycle {

}
