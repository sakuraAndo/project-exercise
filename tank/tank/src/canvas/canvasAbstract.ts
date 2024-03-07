import config from '../config';
import position from '../service/position';

export default abstract class canvasAbstract {
  public models: IModel[] = [];
  constructor(
    protected el: HTMLCanvasElement = document.createElement('canvas'),
    protected canvas = el.getContext('2d')!,
    protected app: HTMLDivElement = document.querySelector('#app')!
  ) {
    this.initCanvas();
  }

  abstract render(): void;
  abstract num(): number;
  abstract model(): modelConstructor;

  protected initCanvas() {
    this.el.width = config.canvas.width;
    this.el.height = config.canvas.height;

    this.app.insertAdjacentElement('afterbegin', this.el);
  }

  // 生成模型
  protected createModel() {
    position.getPositionCollect(this.num()).forEach((position) => {

      const model = this.model();
      const instance = new model(this.canvas, position.x, position.y);
      this.models.push(instance);
    });
  }

  // 将模型渲染到画布上
  protected renderModels() {
    this.models.forEach((model) => {
      model.render();
    });
  }
}
