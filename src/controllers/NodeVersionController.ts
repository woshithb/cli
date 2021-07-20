import {BaseController} from '../context';
import {Bean, BeanName} from '../util';
import semver from 'semver';
import {AutoWired} from '@src/util'

@Bean(BeanName.NodeVersionController)
export class NodeVersionController implements BaseController {

  @AutoWired(BeanName.EventController)
  private eventController

  public destroy() {
  }

  public checkNodeVersion(anchoredVersion: string): boolean {
    return semver.satisfies(process.version, anchoredVersion)
  }
}