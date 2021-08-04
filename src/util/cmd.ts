import {CmdController} from '@src/controllers';

interface ICmdRegisterConfigProps {
  actions?: IActionCmdProps[],
  options?: IOptionCmdProps[],
}

interface IActionCmdProps {
  description: string,
  command: string,
  action: (args: any) => void,
}

interface IOptionCmdProps {
  flags: string,
  description?: string,
  defaultValue: string | boolean,
}

export function cmdCreator(cmdController: CmdController): ICmdRegisterConfigProps {
  return {
    actions: [
      {
        description: 'create your project easily!',
        command: 'create <app-name>',
        action: args => {
          console.log(args);
          cmdController.linearExecuteController.syncContextArgs(args);
        }
      }
    ]
  }
}