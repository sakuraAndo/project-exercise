/// <reference types="vite/client" />

// 全局变量，定义构造函数的接口，使用new（）相当于是定义构造函数
interface modelConstructor {
  new (canvas: CanvasRenderingContext2D, x: number, y: number): IModel;
}

interface IModel {
  render(): void;
  x: number;
  y: number;
  width: number;
  height: number;
  image(): HTMLImageElement
}

interface ICanvas {
  num(): number;
  model(): modelConstructor;
}
