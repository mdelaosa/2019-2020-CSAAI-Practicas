console.log("Ejecutando JS....")

//-- Obtener elementos del DOM
const canvas = document.getElementById('canvas');
const imagen = document.getElementById('imagesrc');
const imagen2 = document.getElementById('imagesrc2');
const ctx = canvas.getContext('2d');

//-- Imágenes
var seleccion = new Image(300,276);
seleccion.src = 'referencia.png';
const boton1 = document.getElementById('img1');
const boton2 = document.getElementById('img2');
canvas.width = seleccion.width;
canvas.height = seleccion.height;
var reflejo = false;

//-- Acceso al filtros
const rgb = document.getElementById('rgb');
const grises = document.getElementById('grises');
const espejo = document.getElementById('espejo');

//-- Acceso al deslizador
const deslizadorR = document.getElementById('deslizadorR');
const deslizadorV = document.getElementById('deslizadorV');
const deslizadorA = document.getElementById('deslizadorA');

//-- Valor del deslizador
const valueR = document.getElementById('valueR');
const valueV = document.getElementById('valueV');
const valueA = document.getElementById('valueA');

//-- Función de retrollamada de imagen cargada
//-- La imagen no se carga instantaneamente, sino que
//-- lleva un tiempo. Sólo podemos acceder a ella una vez
//-- que esté totalmente cargada
seleccion.onload = function () {
  //-- Se establece como tamaño del canvas el mismo
  //-- que el de la imagen original
  //-- Situar la imagen original en el canvas
  //-- No se han hecho manipulaciones todavia
  ctx.drawImage(seleccion, 0,0);
  console.log("Seleccione imagen...");
};

boton1.onclick = () => {
  imagen.onload = function(){
    console.log("Cargamos imagen 1");
    console.log("Imagen 1");
  };
  img = imagen;
  ctx.drawImage(imagen, 0,0);
}

boton2.onclick = () => {
  imagen.onload = function(){
    console.log("Cargamos imagen 2");
    console.log("Imagen 2");
  };
  img = imagen2;
  ctx.drawImage(img, 0,0);
}

function Valores_RGB(){
  ctx.drawImage(img, 0,0);
  reflejo = false;
  let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  let data = imgData.data;

  valueR.innerHTML = deslizadorR.value;
  valueV.innerHTML = deslizadorV.value;
  valueA.innerHTML = deslizadorA.value;

  let umbralR = deslizadorR.value;
  let umbralV = deslizadorV.value;
  let umbralA = deslizadorA.value;

  for (var i = 0; i < data.length; i+=4) {
    if (data[i] > umbralR){
      data[i] = umbralR;
    }
    if (data[i+1] > umbralV){
      data[i+1] = umbralV;
    }
    if (data[i+2] > umbralA){
      data[i+2] = umbralA;
    }
  }
  ctx.putImageData(imgData, 0, 0);
}

rgb.onclick = () => {
  console.log("Umbrales de color");
  reflejo = false;
  ctx.drawImage(img, 0,0);
    deslizadorR.oninput = () => {
       Valores_RGB();
       console.log("Cambio rojo");
    }
    deslizadorV.oninput = () => {
       Valores_RGB();
       console.log("Cambio verde");
    }
    deslizadorA.oninput = () => {
       Valores_RGB();
       console.log("Cambio azul");
    }
}

grises.onclick = () => {
  console.log("Umbrales de gris");
  reflejo = false;
  ctx.drawImage(img, 0,0);
  let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  let data = imgData.data;
  var realce = 0;
  for (let i = 0; i < data.length; i+=4) {
    realce = (3*data[i] + 4*data[i+1]+ data[i+2])/8
    data[i] = data[i+1] = data[i+2] = realce;
  }
  ctx.putImageData(imgData, 0,0);
}

espejo.onclick = () => {
  console.log("Modo espejo");
  reflejo = true;
  if reflejo == true {
    ctx.drawImage(img, 0,0);
    let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let data = imgData.data;
    ctx.translate(img.width, 0);
    ctx.scale(-1, 1);
    ctx.drawImage(img, 0, 0, img.width, img.height);
  }

  ctx.putImageData(imgData, 0,0);
  reflejo = false;
}

console.log("Fin...");
