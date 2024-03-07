import config from './config';
import { promises } from './service/image';
import './style.scss'
// 注意，如果使用import './canvas/straw.ts'则是直接运行该文件，下面的方法是，什么时候用到straw的时候才去运行
// 如下需要先执行异步加载完图片，再调用straw的render方法绘制图片'
import straw from './canvas/straw';
import wall from './canvas/wall';
import water from './canvas/water';
import steel from './canvas/steel';
import tank from './canvas/tank';

const app = document.querySelector<HTMLDivElement>('#app')!

app.style.width = config.canvas.width + 'px'
app.style.height= config.canvas.height+ 'px'


async function bootstap() {
    //先加载图片，然后再绘制图片
   await Promise.all(promises);
   straw.render();
   wall.render();
   water.render();
   steel.render();
   tank.render();
}

bootstap()



