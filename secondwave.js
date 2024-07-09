import {Point} from './point.js';

export class Wave {
  constructor(color) {
    this.color = color;
    this.points = [];
    this.numberOfPoints = 6;
  }

  resize(stageWidth, stageHeight) {
    this.stageWidth = stageWidth;
    this.stageHeight = stageHeight;
    this.centerX = stageWidth / 2;
    this.centerY = stageHeight / 2;
    this.pointGap = this.stageWidth / (this.numberOfPoints - 1);
    this.init();
  }

  init() {
    for (let i = 0; i < this.numberOfPoints; i++) {
      this.points[i] = new Point(i, this.pointGap * i, this.centerY);
    }
  }

  draw(ctx) {
    for (let i = 0; i < this.numberOfPoints; i++) {
      ctx.beginPath();
      ctx.arc(this.points[i].x, this.points[i].y, 30, 0, 2 * Math.PI);
      ctx.fillStyle = '#ffffff0';
      ctx.fill();
      ctx.closePath();
  
      if (i != 0) {
        // 이전 점과 현재 점을 선으로 연결
        ctx.beginPath();
        ctx.moveTo(this.points[i - 1].x, this.points[i - 1].y);
        ctx.lineTo(this.points[i].x, this.points[i].y);
        ctx.strokeStyle = '#ffffff0'; // 선의 색상 설정
        ctx.stroke();
        ctx.closePath();
      }
  
      if (i != 0 && i != this.numberOfPoints - 1) {
        this.points[i].update();
      }
    }
  }
}

