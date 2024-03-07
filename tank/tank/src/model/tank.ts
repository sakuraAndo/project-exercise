import { images } from '../service/image';
import _ from 'lodash';
import modelAbstract from './modelAbstract';
import config from '../config';
import water from '../canvas/water';
import wall from '../canvas/wall';
import steel from '../canvas/steel';
import { direactionEnum } from '../enum/direactionEnum';

export default class extends modelAbstract {
  render(): void {
    this.move();

    if (_.random(20) === 1) {
      this.direaction = direactionEnum.bottom
    }
  }

  protected move(): void {
    while (true) {
      let x = this.x;
      let y = this.y;
      switch (this.direaction) {
        case 'top':
          y--;
          break;
        case 'bottom':
          y++;
          break;
        case 'left':
          x--;
          break;
        case 'right':
          x++;
          break;
      }
      if (this.isTouch(x, y)) {
        this.randomDireaction();
      } else {
        this.x = x;
        this.y = y;
        break;
      }
    }
    super.draw();
  }

  protected isTouch(x: number, y: number): boolean {
    if (
      x < 0 ||
      x + this.width > config.canvas.width ||
      y < 0 ||
      y + this.height > config.canvas.height
    ) {
      return true;
    }

    // 判断坦克是否和水，墙，钢墙相遇
    const models = [...water.models, ...wall.models, ...steel.models];

    return models.some((model) => {
      const state =
        x + this.width <= model.x ||
        x >= model.width + model.x ||
        y + this.height <= model.y ||
        y >= model.height + model.y;

      return !state;
    });

    return false;
  }

  image() {
    let direaction = 'tank' + _.upperFirst(this.direaction);
    return images.get(direaction as keyof typeof config.image)!;
  }
}
