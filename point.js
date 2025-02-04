export class Point {
    constructor(index, x, y) {
      this.x = x;
      this.y = y;
      this.fieldY = y; /* 초기값 200 */
      this.speed = 0.03;
      this.cur = index; 
      this.max = Math.random() * 100 + 150;
    }
  
    update() {
      /* 
      스피드만큼 cur 값이 더해짐 
      cur 값은 계속 커지지만,
      y값은 sin함수의 주기를 따르기 때문에 무한히 -1 ~ 1 사이를 반복함
      */
      this.cur += this.speed;
      /*
      y값이 sin(cur) * max 만큼 늘어남 
      sin(cur)는 sin함수의 주기에 따라 -1에서 1까지 반복
      -1 ~ 1까지의 값에 max(150 ~ 250)값을 곱해줌
      */
      this.y = this.fieldY + Math.sin(this.cur) * this.max;
    }
  }