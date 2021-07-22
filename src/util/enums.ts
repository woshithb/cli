export enum BeanName {
  CmdController = 'CmdController',
  EventController = 'EventController',
  NodeVersionController = 'NodeVersionController',
  ParseController = 'ParseController'
}

export enum TriggerTiming {
  NodeVersionCheck = 'NodeVersionCheck',
  BeforeRegisterCmd = 'BeforeRegisterCmd',
  OnRegisterCmd = 'OnRegisterCmd',
  AfterRegisterCmd = 'AfterRegisterCmd'
}