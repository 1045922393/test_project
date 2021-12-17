const showWord = '烨'

const canvas = document.querySelector('#canvas')
const ctx = canvas.getContext('2d')

const w = window.innerWidth
const h = window.innerHeight

canvas.setAttribute('width', w)
canvas.setAttribute('height', h)

const squeryW = 800
const squeryLX = (w - squeryW) / 2
const squeryTY = (h - squeryW) / 2
const squeryRX = (w - squeryW) / 2 + squeryW
const squeryBY = (h - squeryW) / 2 + squeryW
ctx.strokeRect(squeryLX, squeryTY, squeryW, squeryW)

function drawLine(x1, y1, x2, y2, lineType = 'solid', color = 'black') {
  if (lineType === 'dotted') {
    ctx.setLineDash([5, 10])
  } else if (lineType === 'solid') {
    ctx.setLineDash([])
  }
  ctx.beginPath()
  ctx.moveTo(x1, y1)
  ctx.lineTo(x2, y2)
  ctx.strokeStyle = color
  ctx.stroke()
}

drawLine(squeryLX, squeryTY, squeryRX, squeryBY, 'dotted', 'red')
drawLine(squeryRX, squeryTY, squeryLX, squeryBY, 'dotted', 'red')
drawLine(w / 2, squeryTY, w / 2, squeryBY, 'solid', 'black')
drawLine(squeryLX, h / 2, squeryRX, h / 2, 'solid', 'black')

ctx.textBaseline = 'middle'
ctx.textAlign = 'center'
ctx.font = 'normal 512px fangsong'
ctx.fillText(showWord, w / 2, h / 2)
