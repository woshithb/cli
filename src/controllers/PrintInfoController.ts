import {
  Bean,
  BeanName,
  AutoWired,
  successChalk,
  errorChalk,
  infoChalk
} from '@src/util';
import {BaseController} from '@src/context';
import {ParseController} from '@src/controllers';

@Bean(BeanName.PrintInfoController)
export class PrintInfoController extends BaseController {

  @AutoWired(BeanName.ParseController)
  private parseController: ParseController

  private get directory(): string {
    return this.parseController.contextParams.directory
  }

  public printDirectoryCreatedSuccessfullyInfo() {
    console.log(successChalk(`the directory ${this.directory} is created successfully!`));
  }

  public printDirectoryCreatedFailedInfo() {
    console.log(errorChalk(`the directory ${this.directory} is exist`));
  }

  public printPrepareCreateDirectoryInfo() {
    console.log(infoChalk('prepare create project directory...'));
  }

  public destroy() {
  }
}