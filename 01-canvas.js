 // 获取cavas标签 
 let canvas = document.getElementById('canvas')

 // 获取上下文对象 cavas.getContext('2d') 
 let ctx = canvas.getContext('2d')


 ctx.fillStyle = 'grey'
 ctx.fillRect(0, 0, 1000, 1000)
 ctx.strokeRect(0, 0, 1000, 1000)  // 外边框


 function drawLine(ctx, sX, sY, eX, eY, color = 'black') {
   ctx.beginPath()
   ctx.moveTo(sX, sY)  // 画笔移动到目标位置
   ctx.lineTo(eX, eY)
   ctx.strokeStyle = color
   ctx.stroke()
 }

 drawLine(ctx, 20, 100, 100, 100, 'red')
 drawLine(ctx, 60, 50, 60, 150, 'skyblue')
 drawLine(ctx, 30, 150, 30, 200, 'green')
 drawLine(ctx, 30, 150, 90, 150, 'yellow')
 drawLine(ctx, 90, 150, 90, 200, 'blue')
 drawLine(ctx, 30, 200, 90, 200, 'purple')

 for (let i = 0; i < 10; i++) {
   drawLine(ctx, 100 + 10 * i, 90 + 10 * i, 105 + 10 * i, 95 + 10 * i, 'red')
 }

 ctx.beginPath()
 ctx.moveTo(400, 100)
 ctx.strokeStyle = 'red'
 ctx.lineTo(200, 700)
 ctx.strokeStyle = 'yellow'
 ctx.lineTo(700, 300)
 ctx.lineTo(100, 300)
 ctx.lineTo(600, 700)
 ctx.lineTo(600, 700)
 ctx.lineTo(400, 100)
 ctx.strokeStyle = 'aliceblue'
 ctx.stroke()

 ctx.beginPath()
 ctx.moveTo(20, 700)
 ctx.lineTo(20, 900)
 ctx.lineTo(300, 900)
 ctx.strokeStyle = 'red'
 ctx.stroke()

 const colorMap = ['yellow', 'red', 'green', 'orange', 'purple']
 //  Y + length = 900
 // length范围 0~200
 for (let i = 0; i < 9; i++) {
   ctx.fillStyle = "#" + parseInt(Math.random()* 0xFFFFFF).toString(16)
   const length = Math.random() * 190 | 0 + 10
   ctx.fillRect(30 + i * 30, 900 - length, 20, length -1)
 }
 // 清除画布
 ctx.clearRect(250,250, 300, 300)