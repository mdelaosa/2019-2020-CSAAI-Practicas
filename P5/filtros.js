console.log("Ejecutando JS....")

//-- Obtener elementos del DOM
const canvas = document.getElementById('canvas');
const img = document.getElementById('imagesrc');
const ctx = canvas.getContext('2d');

//-- Acceso al filtros
const rgb = document.getElementById('rgb');

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
img.onload = function () {

  //-- Se establece como tamaño del canvas el mismo
  //-- que el de la imagen original
  canvas.width = img.width;
  canvas.height = img.height;

  //-- Situar la imagen original en el canvas
  //-- No se han hecho manipulaciones todavia
  ctx.drawImage(img, 0,0);

  console.log("Imagen lista...");
};

function Valores_RGB(){
  valueR.innerHTML = deslizadorR.value;
  valueV.innerHTML = deslizadorV.value;
  valueA.innerHTML = deslizadorA.value;
  ctx.drawImage(img, 0,0);
  let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  let data = imgData.data

  let umbralR = deslizadorR.value;
  let umbralV = deslizadorV.value;
  let umbralA = deslizadorA.value;

  for (var i = 0; i < data.length; i+=4) {
    if (data[i] > umbralR)
      data[i] = umbralR;
    }
    if (data[i+1] > umbralV){
      data[i+1] = umbralV;
    }
    if (data[i+2] > umbralA){
      data[i+2] = umbralA;
    }

  ctx.putImageData(imgData, 0, 0);
}

rgb.onclick = () => {
  console.log("Umbrales de color");
   ctx.drawImage(img, 0,0);
     deslizadorR.oninput = () => {
       Valores_RGB();
       console.log("Cambio rojo");
     }
     deslizadorV.oninput = () => {
       Valores_RGB();
       console.log("Cambio azul");
     }
     deslizadorA.oninput = () => {
       Valores_RGB();
       console.log("Cambio azul");
     }
}

console.log("Fin...");
