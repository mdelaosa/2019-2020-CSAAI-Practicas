console.log("Ejecutando JS...");

//-- Obtener el objeto canvas
const canvas = document.getElementById("canvas");

//-- Sus dimensiones las hemos fijado en el fichero
//-- HTML. Las imprimimos en la consola
console.log(`canvas: Anchura: ${canvas.width}, Altura: ${canvas.height}`);

//-- Obtener el contexto para pintar en el canvas
const ctx = canvas.getContext("2d");

//-- Obtener Sonidos
const sonido_raqueta = new Audio("deslizar.mp3");
const sonido_rebote = new Audio("audio.mp3");

//-- Estados del juego
const ESTADO = {
  INIT: 0,
  SAQUE: 1,
  SAQUE2: 2,
  JUGANDO: 3,
  GANAR: 4,
}

//-- Variable de estado
//-- Arrancamos desde el estado inicial
let estado = ESTADO.INIT;

//-- Variables puntos
var Point1 = 0;
var Point2 = 0;

//-- Pintar todos los objetos en el canvas
function draw() {
  //----- Dibujar la Bola
  //-- Solo en el estado de jugando
  if (estado == ESTADO.JUGANDO) {
    bola.draw();
  }

  //-- Dibujar las raquetas
  raqI.draw();
  raqD.draw();


  //------ Dibujar el tanteo
  ctx.font = "50px 	Major Mono Display";
  ctx.fillStyle = "#ffdc43";
  ctx.fillText(Point1, 255, 40);
  ctx.fillText(Point2, 311, 40);

  //-- Dibujar el texto de sacar
  if (estado == ESTADO.SAQUE) {
    ctx.font = "20px 	Walter Turncoat";
    ctx.fillStyle = "pink";
    ctx.fillText("Pulsa SPACE para sacar.", 30, 340);
    ctx.fillText("Pulsa A-Q para Rachel.", 30, 360);
    ctx.fillText("Pulsa P-L para Ross.", 30, 380);
  }

  //-- Dibujar el texto de comenzar
  if (estado == ESTADO.INIT) {
    ctx.font = "35px  Walter Turncoat";
    ctx.fillStyle = "lightpink";
    ctx.fillText("Pulsa Start", 30, 350);
  }

  //-- Dibujar texto ganador
  if (estado == ESTADO.GANAR){
    if (Point1 > Point2 && Point1 == 3){
      ctx.font = "35px  Walter Turncoat";
      ctx.fillStyle = "lightpink";
      ctx.fillText("It wasn't a break", 30, 350);
      ctx.font = "15px  Walter Turncoat";
      ctx.fillStyle = "lightpink";
      ctx.fillText("Pulsa SPACE para reiniciar", 30, 370);
    }else if (Point2 > Point1 && Point2 == 3){
      ctx.font = "35px  Walter Turncoat";
      ctx.fillStyle = "lightpink";
      ctx.fillText("It was a break", 30, 350);
      ctx.font = "15px  Walter Turncoat";
      ctx.fillStyle = "lightpink";
      ctx.fillText("Pulsa SPACE para reiniciar", 30, 370);
    }

  }
}

//---- Bucle principal de la animación
function animacion()
{

  //-- Actualizar las posiciones de los objetos móviles

  //-- Actualizar la raqueta con la velocidad actual
  raqI.update();
  raqD.update();

  //-- Comprobar si la bola ha alcanzado el límite derecho
  //-- Si es así, se cambia de signo la velocidad, para
  // que "rebote" y vaya en el sentido opuesto

  if (bola.y >= canvas.height || bola.y <= 0) {
    //-- Hay colisión vertical. Cambiar el signo de la bola
    bola.vy = bola.vy * -1;
  }

  //-- Si llega al límite izquierdo, hemos perdido
  //-- pasamos al estado de SAQUE
  if (bola.x <= bola.size) {
    //-- Reproducir sonido
    sonido_rebote.currentTime = 0.45;
    sonido_rebote.play();
    Point2++;
    estado = ESTADO.SAQUE;
    bola.init();
    console.log("ROSS: IT WAS A BREAK");
    if (Point2 > Point1 && Point2 == 3){
      estado = ESTADO.GANAR;
    }
    return;
  }else if (bola.x >= canvas.width) {
    //-- Reproducir sonido
    sonido_rebote.currentTime = 0.45;
    sonido_rebote.play();
    Point1++;
    estado = ESTADO.SAQUE2;
    bola.init();
    console.log("RACHEL: IT WASN'T A BREAK");
    if (Point1 > Point2 && Point1 == 3){
      estado = ESTADO.GANAR;
    }
    return;
  }

  //-- Comprobar si hay colisión con la raqueta izquierda
  if (bola.x >= raqI.x && bola.x <=(raqI.x + raqI.width) &&
      bola.y >= raqI.y && bola.y <=(raqI.y + raqI.height)) {
    bola.vx = bola.vx * -1;

    //-- Reproducir sonido
    sonido_raqueta.currentTime = 0;
    sonido_raqueta.play();
  }
  if (bola.x >= raqD.x && bola.x <=(raqD.x + raqD.width) &&
      bola.y >= raqD.y && bola.y <=(raqD.y + raqD.height)) {
    bola.vx = bola.vx * -1;

    //-- Reproducir sonido
    sonido_raqueta.currentTime = 0;
    sonido_raqueta.play();
  }

  //-- Actualizar coordenada x de la bola, en funcion de
  //-- su velocidad
  bola.update()

  //-- Borrar la pantalla
  ctx.clearRect(0,0, canvas.width, canvas.height);

  //-- Dibujar el nuevo frame
  draw();
}

//-- Inicializa la bola: Llevarla a su posicion inicial
const bola = new Bola(ctx);

//-- Crear las raquetas
const raqI = new Raqueta(ctx);
const raqD = new Raqueta(ctx);

//-- Cambiar las coordenadas de la raqueta derecha
raqD.x_ini = 540;
raqD.y_ini = 300;
raqD.init();

//-- Arrancar la animación
setInterval(()=>{
  animacion();
},16);

//-- Retrollamada de las teclas
window.onkeydown = (e) => {

  //-- En el estado inicial no se
  //-- hace caso de las teclas
  if (estado == ESTADO.INIT)
    return;

  switch (e.key) {
    case "a":
    case "A":
      raqI.v = raqI.v_ini;
      break;
    case "q":
    case "Q":
      raqI.v = raqI.v_ini * -1;
      break;
    case "p":
    case "P":
      raqD.v = raqD.v_ini * -1;
      break;
    case "l":
    case "L":
      raqD.v = raqD.v_ini;
      break;
    case " ":

      //-- El saque solo funciona en el estado de SAQUE
      if (estado == ESTADO.SAQUE) {
        //-- Reproducir sonido
        sonido_raqueta.currentTime = 0;
        sonido_raqueta.play();

        //-- Llevar bola a su posicion incicial
        bola.init();

        //-- Darle velocidad
        bola.vx = Math.floor(Math.random() * 6 + 3);
        bola.vy = Math.floor(Math.random() * 5 + 1);

        //-- Cambiar al estado de jugando!
        estado = ESTADO.JUGANDO;

        return false;
      }
      if (estado == ESTADO.SAQUE2) {
        //-- Reproducir sonido
        sonido_raqueta.currentTime = 0;
        sonido_raqueta.play();

        //-- Llevar bola a su posicion incicial
        bola.init2();

        //-- Darle velocidad
        bola.vx = Math.floor(Math.random() * 6 - 3);
        bola.vy = Math.floor(Math.random() * 5 + 1);

        //-- Cambiar al estado de jugando!
        estado = ESTADO.JUGANDO;

        return false;
      }
      if (estado == ESTADO.GANAR) {
        Point1 = 0;
        Point2 = 0;
      }
    default:
  }
}

//-- Retrollamada de la liberacion de teclas
window.onkeyup = (e) => {
  if (e.key == "a" || e.key == "q"){
    //-- Quitar velocidad de la raqueta
    raqI.v = 0;
  }else if (e.key == "A" || e.key == "Q") {
    raqI.v = 0;
  }

  if (e.key == "p" || e.key == "l") {
    raqD.v = 0;
  }else if (e.key == "P" || e.key == "L") {
    raqD.v = 0;
  }
}

//-- Botón de arranque
const start = document.getElementById("start");

start.onclick = () => {
  estado = ESTADO.SAQUE;
  console.log("SAQUE!");
  canvas.focus();
}

//-- Boton de stop
const stop = document.getElementById("stop");

stop.onclick = () => {
  //-- Volver al estado inicial
  estado = ESTADO.INIT;
  bola.init();
  start.disabled = false;
}
