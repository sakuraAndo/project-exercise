import config from '../config';
import canvasAbstract from './canvasAbstract';
import model from '../model/tank';
import position from '../service/position';

class tank extends canvasAbstract implements ICanvas {
  num(): number {
    return config.tank.num;
  }
  model(): modelConstructor {
    return model;
  }
  render(): void {
    this.createModel();
    this.renderModels();

    // setInterval(()=> this.renderModels(), config.timeout)
  }
  protected createModel() {
    for (let i = 0; i < this.num(); i++) {
      const pos = position.getPosition();
      const model = this.model();
      const instance = new model(this.canvas, pos.x, 0);
      this.models.push(instance);
    }
  }
  // 将模型渲染到画布上
  protected renderModels() {
    this.canvas.clearRect(0, 0, config.canvas.width, config.canvas.height);
    super.renderModels()
  }
}

export default new tank();
