import config from '../config';
import canvasAbstract from './canvasAbstract';
import model from '../model/steel';

class steel extends canvasAbstract implements ICanvas{
  num(): number {
    return config.steel.num;
  }
  model(): modelConstructor {
    return model;
  }
  render(): void {
    super.createModel();
    super.renderModels()
  }
}

export default new steel()
