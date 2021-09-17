import {BaseController, BasePlugin} from '@src/context';
import {AutoWired, Bean, BeanName, PostConstruct} from '@src/util';
import {PaddleTrunk} from '@src/trunks';

@Bean(BeanName.PluginsController)
export class PluginsController implements BaseController {

  @AutoWired(BeanName.Plugins)
  private plugins: BasePlugin<PaddleTrunk>[]

  @AutoWired(BeanName.Trunk)
  private paddleTrunk: PaddleTrunk

  @PostConstruct
  private registerPlugins() {
    this.plugins.forEach(plugin => plugin.apply(this.paddleTrunk))
  }

  public destroy() {
  }
}