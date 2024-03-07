import config from '../config';

type positionType = { x: number; y: number };
class position {
  collection: positionType[] = [];
  // 批量获取唯一坐标
  public getPositionCollect(num: number) {
    let collections = [];
    for (let i = 0; i < num; i++) {
      while (true) {
        let { x, y } = this.getPosition();
        let exist = this.collection.some((c) => c.x === x && c.y === y);
        if (!exist) {
          this.collection.push({ x, y });
          collections.push({x,y})
          break;
        }
      }
    }
    return collections;
  }

  // 生成随机位置
  public getPosition() {
    return {
      x:
        Math.floor(Math.random() * (config.canvas.width / config.model.width)) *
        config.model.width,
      y:
        Math.floor(
          Math.random() * (config.canvas.height / config.model.height - 5)
        ) *
          config.model.height +
        config.model.height * 2,
    };
  }
}

export default new position();
