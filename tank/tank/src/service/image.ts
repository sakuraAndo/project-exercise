import config from "../config";

type mapKey = keyof typeof config.image;


export const images = new Map<mapKey , HTMLImageElement>();

// 加载图片，生成promise数组
export const promises = Object.entries(config.image).map(([key, value])=> {
   return new Promise((resolve)=> {
    const image = document.createElement('img');
    image.src = value;
    image.onload = ()=> {
        images.set(key as mapKey, image) 
        resolve(value)
    }
   }) 
})