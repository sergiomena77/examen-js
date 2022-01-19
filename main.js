var display = document.getElementById('display')
var arcas = document.getElementById('arcas')

arcas.getAttribute('title')
arcas.getAttribute('name')
arcas.addEventListener('click', cargaImagen)
function cargaImagen(){
  display.querySelector('#display img').src =arcas.src;
  display.querySelector('#display h2').innerHTML =arcas.title;
  display.querySelector('#display p').innerHTML =arcas.name;
}
//belmonte
var belmonte = document.getElementById('belmonte')

belmonte.getAttribute('title')
belmonte.getAttribute('name')

belmonte.addEventListener('click', cargaImagenArcas)
function cargaImagenArcas(){
  display.querySelector('#display img').src =belmonte.src;
  display.querySelector('#display h2').innerHTML =belmonte.title;
  display.querySelector('#display p').innerHTML =belmonte.name;
}

//huete
var huete = document.getElementById('huete')

huete.getAttribute('title')
huete.getAttribute('name')

huete.addEventListener('click', cargaImagenHuete)
function cargaImagenHuete(){
  display.querySelector('#display img').src =huete.src;
  display.querySelector('#display h2').innerHTML =huete.title;
  display.querySelector('#display p').innerHTML =huete.name;
}

//LA ALMARCHA
var almarcha = document.getElementById('LaAlmarcha')

almarcha.getAttribute('title')
almarcha.getAttribute('name')

almarcha.addEventListener('click', cargaImagenAlmarcha)
function cargaImagenAlmarcha(){
  display.querySelector('#display img').src =almarcha.src;
  display.querySelector('#display h2').innerHTML =almarcha.title;
  display.querySelector('#display p').innerHTML =almarcha.name;
}

//ALARCON

//LA ALMARCHA
var alarcon = document.getElementById('alarcon')

alarcon.getAttribute('title')
alarcon.getAttribute('name')

alarcon.addEventListener('click', cargaImagenAlarcon)
function cargaImagenAlarcon(){
  display.querySelector('#display img').src =alarcon.src;
  display.querySelector('#display h2').innerHTML =alarcon.title;
  display.querySelector('#display p').innerHTML =alarcon.name;
}

//SAN CLEMENTE
var sanclemente = document.getElementById('sanclemente')

sanclemente.getAttribute('title')
sanclemente.getAttribute('name')

sanclemente.addEventListener('click', cargaImagenSanclemente)
function cargaImagenSanclemente(){
  display.querySelector('#display img').src =sanclemente.src;
  display.querySelector('#display h2').innerHTML =sanclemente.title;
  display.querySelector('#display p').innerHTML =sanclemente.name;
}


