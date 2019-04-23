var c = document.getElementById('iceCream');
var ctx = c.getContext('2d');

ctx.beginPath();
ctx.moveTo(200,400);
ctx.lineTo(250,200);
ctx.lineTo(150,200);
ctx.fillStyle = '#aa6522';
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(150,200);
ctx.quadraticCurveTo(200,60,250,200);
ctx.fillStyle = '#8a0908';
ctx.fill();
ctx.closePath();
