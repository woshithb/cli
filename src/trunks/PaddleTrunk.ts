import {BeanTrunk} from '@src/trunks';

export class PaddleTrunk extends BeanTrunk {

  private registerPlugins() {
    this.plugins.forEach(plugin => plugin.apply(this));
  }

  public async execute() {
    this.registerPlugins();
    await this.linearExecuteController.iterateExecute(this);
  }
}