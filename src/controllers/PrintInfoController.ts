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

  private get isForceCreateDirectory() {
    return this.parseController.contextParams.forceCreate
  }

  public printPrepareCheckDirectoryInfo() {
    if (this.isForceCreateDirectory) {
      console.log(infoChalk(`skip checking whether ${this.directory} exists...`));
    } else {
      console.log(infoChalk(`ready to check if ${this.directory} exists...`));
    }
  }

  public printExistDueToDirectoryExist() {
    console.log(errorChalk('paddle failed because of existing directory'))
  }

  public printDeleteExistingDirectoryInfo() {
    console.log(infoChalk('delete the existing directory...'))
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

  public printError(error) {
    console.log(errorChalk(error))
  }

  public destroy() {
  }
}