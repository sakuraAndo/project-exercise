import config from '../config';
import canvasAbstract from './canvasAbstract';
import model from '../model/water';

class water extends canvasAbstract implements ICanvas {
  num(): number {
    return config.water.num;
  }
  model(): modelConstructor {
    return model;
  }
  render(): void {
    super.createModel();
    super.renderModels()
  }
}

export default new water()
