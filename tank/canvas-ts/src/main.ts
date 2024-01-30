const el = document.querySelector<HTMLCanvasElement>('#canvas')!;

const app = el.getContext('2d')!;

//画线和填充图形
// app.fillStyle = 'red';
// app.fillRect(0, 0, 300, 300);

// app.fillStyle = 'green';
// app.fillRect(100, 100, 100, 100)

// app.strokeStyle = 'red';
// app.arc(100, 100, 50, 0, Math.PI * 2)
// app.stroke();
// app.fill();

// 多边形绘制
// app.beginPath();
// app.strokeStyle = 'blue';
// app.lineWidth = 5

// app.moveTo(150, 10);
// app.lineTo(300, 200);
// app.lineTo(0, 200);
// app.closePath();

// app.stroke()

// 渐变色
// const gradient = app.createLinearGradient(0, 0, 300, 300);

// gradient.addColorStop(0, '#e74c3c');
// gradient.addColorStop(0.5, '#2ecc71');
// gradient.addColorStop(1, '#ecf0f1');

// // app.fillStyle = gradient;
// // app.fillRect(0, 0, 300, 300);

// app.strokeStyle = gradient;
// app.lineWidth = 10;
// app.lineJoin = 'round';
// app.strokeRect(50, 50, 100, 100);

// 文字处理
// app.strokeStyle = 'red';
// app.font = '50px Annai MN'
// app.strokeText('hello world', 50, 50)

// 图片覆盖
// const image = document.createElement('img');
// image.src = '../images/anto.png'

// image.onload = ()=> {
//     const pattern = app.createPattern(image, 'repeat')!;
//     app.fillStyle = pattern;
//     app.fillRect(0,0,500,500)
// }

// 绘制图片

// 重要，常用的图片放缩方式
// const image = document.createElement('img');
// image.src = '../images/anto.png';

// image.onload = () => {
//     el.width = image.naturalWidth * scale(image, el)
//     el.height = image.naturalHeight * scale(image, el)
//     app.drawImage(image, 0, 0, el.width, el.height);
// };

// function scale(img: HTMLImageElement, el: HTMLCanvasElement) {
//     return Math.min(el.width / img.naturalWidth, el.height / img.naturalHeight);
// }

// 实现随记色块

app.fillStyle = '#95a5a6';
app.fillRect(0, 0, 250, 250);

for (let i = 0; i < 1000; i++) {
  app.beginPath();
  app.fillStyle = [
    '#2ecc71',
    '#f1c40f',
    '#c0392b',
    '#8e44ad',
    '#2c3e50',
    '#1B1464',
  ].sort(() => (Math.floor(Math.random() * 3) ? -1 : 1))[0];

  app.arc(
    (Math.random() * el.width / 2),
    (Math.random() * el.height / 2),
    Math.random() * 10 + 10,
    0,
    Math.PI * 2
  );

  app.fill();
}
