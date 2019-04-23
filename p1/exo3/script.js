var c = document.getElementById('home');
var ctx = c.getContext('2d');
// Fond1 les beginPath ne sont pas obligé quand on a des fillRect, quand
//on fait des formes ou quand on fait un arc.
//voiture
ctx.fillStyle = '#00a551';
ctx.fillRect(300,200,600,200);
ctx.fillRect(200,300,800,200);

// Roue
ctx.beginPath();
// arc( x, y, radius, startAngle, endAngle, sensAntiHoraire)
//la 3eme valeur est le radius qui permet d'arrondir un élément
ctx.arc(300,600,100,0,Math.PI*2,true);
ctx.fillStyle = '#cdcdcd';
ctx.fill();
ctx.strokeStyle = '#848484';
ctx.stroke();

// Roue
ctx.beginPath();
ctx.arc(900,600,100,0,Math.PI*2,true);
ctx.fillStyle = '#cdcdcd';
ctx.fill();
ctx.strokeStyle = '#848484';
ctx.stroke();
