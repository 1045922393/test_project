const canvas = document.querySelector('#canvas');
  const ctx = canvas.getContext('2d')
  ctx.fillStyle = "#eee"
  ctx.fillRect(0, 0, 1000, 1000)
  // 逆时针 true 顺时针 false
  ctx.arc(500, 500, 200, 0, Math.PI * 0.5, false)
  ctx.fillStyle = 'gold'
  ctx.fill()
  ctx.lineWidth = 3
  ctx.strokeStyle = 'red'
  ctx.stroke()

  ctx.beginPath()
  ctx.arc(200, 200, 200, Math.PI, 0, false)

  ctx.lineTo(600, 200)

  ctx.arc(800, 200, 200, Math.PI, 0, true)
  ctx.lineTo(1000,500)
  ctx.lineTo(699,500)
  ctx.moveTo(500, 700)
  ctx.lineTo(500,1000)
  ctx.stroke()
