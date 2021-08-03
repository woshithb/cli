import commander from 'commander';

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
  option: string
}

export function cmdCreator(commander: commander.Command): ICmdRegisterConfigProps {
  return {
    actions: [
      {
        description: 'create your project easily!',
        command: 'create <app-name>',
        action: args => {
          console.log(args)
        }
      }
    ]
  }
}