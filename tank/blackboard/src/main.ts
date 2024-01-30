import './style.css';

class BlackBoard {
  constructor(
    private el: HTMLCanvasElement = document.querySelector('#canvas')!,
    private app = el.getContext('2d')!,
    private width: number = el.width,
    private height: number = el.height,
    private btns: HTMLDivElement = document.createElement('div'),
    private bgColor: string = 'black',
    private lineColor: string = 'white'
  ) {
    this.initCanvas();
    this.bindEvent();
    this.erase();
    this.draw();
    this.bulletin();
  }

  initCanvas() {
    this.app.fillStyle = this.bgColor;
    this.app.fillRect(0, 0, this.width, this.height);

    this.btns.classList.add('container');
    this.el.insertAdjacentElement('afterend', this.btns);
  }

  private bindEvent() {
    const callback = this.drawLine.bind(this);

    this.el.addEventListener('mousedown', () => {
      this.app.beginPath();
      this.app.strokeStyle = this.lineColor;

      // 待会要清除这个事件，后面的函数要使用callback保存，如果直接将函数写在里面，
      // 因为使用了bind，两次的函数不是相同的，无法做到清除的效果。
      this.el.addEventListener('mousemove', callback);
    });

    document.addEventListener('mouseup', () => {
      this.el.removeEventListener('mousemove', callback);
    });
  }

  private drawLine(event: MouseEvent) {
    this.app.lineTo(event.offsetX, event.offsetY);
    this.app.stroke();
  }

  public clear() {
    const button = document.createElement('button');
    button.innerText = '清屏';

    this.btns.insertAdjacentElement('afterbegin', button);

    button.addEventListener('click', () => {
      this.app.fillStyle = this.bgColor;
      this.app.fillRect(0, 0, this.el.width, this.el.height);
    });

    return this;
  }

  public setBgColor(color: string) {
    (this.bgColor = color),
      (this.app.fillStyle = this.bgColor),
      this.app.fillRect(0, 0, this.el.width, this.el.height);
  }

  public setLineColor() {
    const colors = ['#f8c291', '#e55039', '#ffffff', '#3c6382', '#f6b93b', '#2ed573'];
    const divs = document.createElement('div');
    divs.classList.add('div-container')
    this.btns.insertAdjacentElement('beforeend', divs);
    for (let i = 0; i < colors.length; i++) {
      const div = document.createElement('div');
      div.addEventListener('click', ()=> {
        this.lineColor = colors[i];
      })
      div.classList.add('color-block');
      div.style.cssText = `background-color: ${colors[i]}`;
      divs.insertAdjacentElement('beforeend', div);
    }
  }

  public erase() {
    const button = document.createElement('button');
    button.innerText = '橡皮';

    this.btns.insertAdjacentElement('afterbegin', button);

    button.addEventListener('click', () => {
      this.lineColor = this.bgColor;
      this.app.lineWidth = 10;
    });

    return this; 
  }

  public draw() {
    const button = document.createElement('button');
    button.innerText = '绘画';

    this.btns.insertAdjacentElement('afterbegin', button);

    button.addEventListener('click', () => {
      this.lineColor = 'white';
      this.app.lineWidth = 1;
    });

    return this; 
  }

  public short() {
    const button = document.createElement('button');
    button.innerText = '截图';

    this.btns.insertAdjacentElement('afterbegin', button);

    const image = document.createElement('img');

    image.classList.add('short-cut');

    button.addEventListener('click', () => {
      image.src = this.el.toDataURL('image/jpg')
    });

    this.btns.insertAdjacentElement('afterend', image);

    return this;  
  }

  public bulletin() {
    const title = document.createElement('h1');
    title.innerText = '小画板';

    title.classList.add('title');

    this.el.insertAdjacentElement('beforebegin', title)
  }
}

const instance = new BlackBoard();

instance.clear().setBgColor('black');

instance.setLineColor();

instance.short();
