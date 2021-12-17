const canvas = document.querySelector('#canvas');
const count = 20
const w = window.innerWidth - 15
const h = window.innerHeight - 15

canvas.setAttribute('width', w + 'px')
canvas.setAttribute('height', h + 'px')
const ctx = canvas.getContext('2d')
// ctx.lineWidth = 5
const speed = 2
// ctx.strokeRect(0, 0, w, h)

// 随机整数
function r(min = 0, max = 100) {
  return (Math.random() * (max - min + 1)) + min | 0
}

function rc() {
  return '#' + (0xFFFFFF * Math.random() | 0).toString(16)
}

class Circle {
  constructor(x, y, dir) {
    this.x = x
    this.y = y
    this.dir = dir
    this.color = rc()
    const XD = r() > 50 ? 1 : -1
    const YD = r() > 50 ? 1 : -1
    this.directionX = r(speed, speed + 1) * XD
    this.directionY = r(speed, speed + 1) * YD
  }

  drawCircle(color) {
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.dir, 0, Math.PI * 2, false)
    ctx.fillStyle = color || this.color
    ctx.fill()
    // ctx.stroke()
  }

  runCircle() {
    if (this.x >= w - this.dir) {
      this.directionX = -r(speed, speed + 1)
      this.color = rc()
    } else if (this.x <= this.dir) {
      this.color = rc()
      this.directionX = r(speed, speed + 1)
    }
    if (this.y >= h - this.dir) {
      this.color = rc()
      this.directionY = -r(speed, speed + 1)
    } else if (this.y <= this.dir) {
      this.color = rc()
      this.directionY = r(speed, speed + 1)
    }
    this.x = this.x + this.directionX
    this.y = this.y + this.directionY
    // this.color = rc()
  }
  start() {
    this.runCircle()
    this.drawCircle()
  }
}

const circles = [...new Array(count).keys()].map(() => {
  return new Circle(r(100, w - 100), r(100, h - 100), r(20, 100))
})
function render() {
  ctx.clearRect(0, 0, w, h)
  ctx.beginPath()
  let my_gradient = ctx.createLinearGradient(0, 0, w, h);
  // my_gradient.addColorStop(0, "#81FFEF");
  // my_gradient.addColorStop(1, "#F067B4");
  my_gradient.addColorStop(0, '#a18cd1')
  my_gradient.addColorStop(0.2, '#ff9a9e')
  my_gradient.addColorStop(0.4, '#c2e9fb')
  my_gradient.addColorStop(0.6, '#fcb69f')
  my_gradient.addColorStop(0.8, '#fad0c4')
  my_gradient.addColorStop(1, '#fbc2eb')
  ctx.fillStyle = my_gradient
  ctx.fillRect(0, 0, w, h)
  for (let i = 0; i < circles.length; i++) {
    circles[i].start()
    circles.forEach((item, index) => {
      if (index > i) {
        drawLine(circles[i].x, circles[i].y, item.x, item.y, item.color)
      }
    })
  }
}

function drawLine(x1, y1, x2, y2, color) {
  ctx.beginPath()
  ctx.moveTo(x1, y1)
  ctx.lineTo(x2, y2)
  ctx.lineWidth = 1
  ctx.strokeStyle = color
  ctx.stroke()
}

// 文字垂直水平居中
function showText() {
  ctx.beginPath()
  ctx.font = 'bold 256px serif'
  ctx.textAlign = 'center'
  ctx.fillStyle = '#f46896'
  ctx.textBaseline = 'middle'
  ctx.fillText('STOP', w / 2, h / 2)
}

let start = true
let timer = null
timer = setInterval(render, 10)
const body = document.querySelector('body')
body.addEventListener('click', () => {
  if (start) {
    clearInterval(timer)
    showText()
    start = !start
  } else {
    timer = setInterval(render, 10)
    start = !start
  }
})
