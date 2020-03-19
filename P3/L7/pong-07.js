console.log("Ejecutando JS...");

//-- Obtener el objeto canvas
const canvas = document.getElementById("canvas");

//-- Sus dimensiones las hemos fijado en el fichero
//-- HTML. Las imprimimos en la consola
console.log(`canvas: Anchura: ${canvas.width}, Altura: ${canvas.height}`);

//-- Obtener el contexto para pintar en el canvas
const ctx = canvas.getContext("2d");

//-- Variables para la bola
let bola_x = 50;

//-- Pintar todos los objetos en el canvas
function draw() {
  //----- Dibujar la Bola
  ctx.beginPath();
  ctx.fillStyle='lightblue';

  //-- x,y, anchura, altura
  ctx.rect(bola_x, 200, 10, 10);
  ctx.fill();

  //------- Dibujar las raquetas
  ctx.beginPath();
  ctx.fillStyle='pink';

  //-- Raqueta izquierda
  ctx.rect(50, 100, 10, 50);

  //-- Raqueta derecha
  ctx.rect(540, 300, 10, 50);

  //-- Pintar!
  ctx.fill();

  //--------- Dibujar la red
  ctx.beginPath();

  //-- Estilo de la linea: discontinua
  //-- Trazos de 10 pixeles, y 10 de separacion
  ctx.setLineDash([20, 5]);
  ctx.strokeStyle = 'lightgreen';
  ctx.lineWidth = 2;
  //-- Punto superior de la linea. Su coordenada x está en la mitad
  //-- del canvas
  ctx.moveTo(canvas.width/2, 0);

  //-- Dibujar hasta el punto inferior
  ctx.lineTo(canvas.width/2, canvas.height);
  ctx.stroke();

  //------ Dibujar el tanteo
  ctx.font = "100px Arial";
  ctx.fillStyle = "#CC99FF";
  ctx.fillText("0", 200, 80);
  ctx.fillText("1", 340, 80);

}

//---- Bucle principal de la animación
function animacion()
{

  //-- Actualizar las posiciones de los objetos móviles
  //-- De momento no lo estamos haciendo

  //-- Borrar la pantalla
  ctx.clearRect(0,0, canvas.width, canvas.height);

  //-- Dibujar el nuevo frame
  draw();

  //-- Mostrar actividad en la consola
  //-- Para comprobar que "está vivo",
  //-- aunque no se mueva nada en la pantalla
  //-- todavía
  console.log("Frame!");
}

//-- Arrancar la animación
setInterval(()=>{
  animacion();
},16);

//-- Obtener el boton de dar un "paso"
const paso = document.getElementById("paso");

//-- Botón de dar un Paso: Cada vez que lo apretamos
//-- la bola avanza 5 píxeles
paso.onclick = () => {
  //-- Incrementar la posicion x de la bola
  bola_x += 5;
  console.log("Paso!");
}
