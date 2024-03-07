import config from '../config';
import canvasAbstract from './canvasAbstract';
import model from '../model/straw';

class straw extends canvasAbstract implements ICanvas {
  num(): number {
    return config.straw.num;
  }
  model(): modelConstructor {
    return model;
  }
  render(): void {
    super.createModel();
    super.renderModels()
  }
}

export default new straw();
