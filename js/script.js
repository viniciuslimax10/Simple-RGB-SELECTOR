window.addEventListener('load', start);
var color1, color2, color3;
var valor1, valor2, valor3;
var color, background;

function start() {
  color1 = document.getElementById('color1').value;
  color2 = document.getElementById('color2').value;
  color3 = document.getElementById('color3').value;
  valor1 = document.getElementById('valor1');
  valor2 = document.getElementById('valor2');
  valor3 = document.getElementById('valor3');
  background = document.getElementById('background');
}

function atribuiValor() {
  color1 = document.getElementById('color1').value;
  color2 = document.getElementById('color2').value;
  color3 = document.getElementById('color3').value;
  color = 'rgb(' + color1 + ',' + color2 + ',' + color3 + ')';
  valor1.value = color1;
  valor2.value = color2;
  valor3.value = color3;
  background.style.background = color;
}

document.getElementById('color1').addEventListener('input', atribuiValor);
document.getElementById('color2').addEventListener('input', atribuiValor);
document.getElementById('color3').addEventListener('input', atribuiValor);
