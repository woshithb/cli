export enum BeanName {
  CmdController = 'CmdController',
  EventController = 'EventController',
  NodeVersionController = 'NodeVersionController',
  ParseController = 'ParseController'
}

export enum TriggerTiming {
  BeforeRegisterCmd = 'BeforeRegisterCmd',
  AfterRegisterCmd = 'AfterRegisterCmd'
}

export enum ProjectInitialLiftCycle {
  BeforeDirectoryCheck = 'BeforeDirectoryCheck',
  AfterDirectoryCheck = 'AfterDirectoryCheck',
}