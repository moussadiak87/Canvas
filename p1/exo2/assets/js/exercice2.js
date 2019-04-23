var c = document.getElementById('house');
var ctx = c.getContext('2d');

//Corps de la maison
ctx.beginPath();
ctx.fillStyle = '#A1D8E6';
ctx.fillRect(100,150,200,200);
ctx.closePath();

//Fenêtres
ctx.beginPath();
ctx.fillStyle = '#C9C9C9';
//fillRect -> Pour faire un rectangle et effectuer le remplissage attribué précedemment.
//fillRect(largeur de la position, hauteur de la position, largeur de la fenêtre, hauteur de la fenêtre).
ctx.fillRect(125,175,50,50);
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = '#C9C9C9';
ctx.fillRect(225,175,50,50);
ctx.closePath();

//Porte
ctx.beginPath();
ctx.fillStyle = '#C9C9C9';
ctx.fillRect(175,275,50,75);
ctx.closePath();

//Toit
ctx.beginPath();
ctx.moveTo(100,150);
ctx.lineTo(200,50);
ctx.lineTo(300,150);
ctx.lineTo(100,150);
ctx.fillStyle = '#D7823E';
ctx.fill();
ctx.closePath();
