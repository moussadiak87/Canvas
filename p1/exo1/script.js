var c = document.getElementById('canvas');
var canvas = c.getContext('2d');
//Corps de la maison
//beginPath permet de commencer un nouveau tracé.
canvas.beginPath();
//moveTo permet de choisir un point de départ.
canvas.moveTo(100,150);
//lineTo permet de tracer un trait et prend en paramètre le point d'arrivée.
canvas.lineTo(100,350);
canvas.lineTo(300,350);
canvas.lineTo(300,150);
//fillStyle permet de choisir la couleur de remplissage.
canvas.fillStyle = '#A1D8E6';
//fill() permet de remplir la forme en fonction de fillStyle.
canvas.fill();
//closePath permet de finir le tracé et revient au point d'origine.
canvas.closePath();
//Toit de la maison
canvas.beginPath();
canvas.moveTo(100,150);
canvas.lineTo(200,50);
canvas.lineTo(300,150);
canvas.fillStyle = '#D7823E';
canvas.fill();
canvas.closePath();
//Porte
canvas.beginPath();
canvas.moveTo(175,350);
canvas.lineTo(225,350);
canvas.lineTo(225,270);
canvas.lineTo(175,270);
canvas.fillStyle = '#C9C9C9';
canvas.fill();
canvas.closePath();
//fenetre de gauche
canvas.beginPath();
canvas.moveTo(120,170);
canvas.lineTo(120,210);
canvas.lineTo(160,210);
canvas.lineTo(160,170);
canvas.fillStyle = '#C9C9C9';
canvas.fill();
canvas.closePath();
//fenetre de droite
canvas.beginPath();
canvas.moveTo(280,170);
canvas.lineTo(280,210);
canvas.lineTo(240,210);
canvas.lineTo(240,170);
canvas.fillStyle = '#C9C9C9';
canvas.fill();
canvas.closePath();
