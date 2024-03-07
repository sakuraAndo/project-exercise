import config from '../config';
import { direactionEnum } from '../enum/direactionEnum';

export default abstract class modelAbstract {
  protected direaction: direactionEnum = direactionEnum.top;
  public width: number = config.model.width;
  public height: number = config.model.height;

  abstract render(): void;

  abstract image(): HTMLImageElement;

  constructor(
    protected canvas: CanvasRenderingContext2D,
    public x: number,
    public y: number
  ) {
    this.randomDireaction();
  }

  protected draw() {
    this.canvas.drawImage(
      this.image(),
      this.x,
      this.y,
      config.model.width,
      config.model.height
    );
  }
  randomDireaction() {
    this.direaction = Object.keys(direactionEnum)[
      Math.floor(Math.random() * 4)
    ] as direactionEnum;
  }
}
