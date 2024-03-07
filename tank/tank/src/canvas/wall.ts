import config from '../config';
import canvasAbstract from './canvasAbstract';
import model from '../model/wall';

class wall extends canvasAbstract implements ICanvas {
  num(): number {
    return config.wall.num;
  }
  model(): modelConstructor {
    return model;
  }
  render(): void {
    super.createModel();
    super.renderModels()
  }
}

export default new wall()
