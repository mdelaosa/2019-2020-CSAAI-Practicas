console.log("Ejecutando JS...");

//----- Obtener elemento de video y configurarlo
  const video = document.getElementById("video");
  video.poster = "https://raw.githubusercontent.com/mdelaosa/videosP4CSAAI/master/intro.gif";
  video.width = 600;  //-- Tamaño de la pantalla de video

  const video1 = document.getElementById("video1")
  video1.src = "https://github.com/mdelaosa/videosP4CSAAI/raw/master/present.mp4"
  video1.width = 300;  //-- Tamaño de la pantalla de video
  const vid1 = document.getElementById('vid1'); //-- Botón para seleccionar

  const video2 = document.getElementById("video2")
  video2.src = "https://github.com/mdelaosa/videosP4CSAAI/raw/master/Beyonce.mp4"
  video2.width = 300;  //-- Tamaño de la pantalla de video
  const vid2 = document.getElementById('vid2'); //-- Botón para seleccionar

  const video3 = document.getElementById("video3")
  video3.src = "https://github.com/mdelaosa/videosP4CSAAI/raw/master/million%20dollars.mp4"
  video3.width = 300;  //-- Tamaño de la pantalla de video
  const vid3 = document.getElementById('vid3'); //-- Botón para seleccionar

  const imgprueba = document.getElementById("imgprueba");
  imgprueba.src = "https://raw.githubusercontent.com/mdelaosa/videosP4CSAAI/master/prueba.jpeg";
  imgprueba.width=300;
  const prueba = document.getElementById('prueba'); //-- Botón para seleccionar

  const loop = document.getElementById("loop");
  const noloop = document.getElementById("noloop");
  var bucle = false;
  const inicio = 3;
  const fin = 5;

  vid1.onclick = () => {
  console.log("Video 1");
    video.poster = false;
    video.src = video1.src;
    video.muted = false;
    video1.style.border = "dotted #0a0a0a 5px";
    video2.style.border = "none";
    video3.style.border = "none";
    imgprueba.style.border = "none";

};

  vid2.onclick = () => {
    console.log("Video 1");
    video.poster = false;
    video.src = video2.src;
    video.muted = false;
    video1.style.border = "none";
    video2.style.border = "dotted #0a0a0a 5px";
    video3.style.border = "none";
    imgprueba.style.border = "none";

  };

  vid3.onclick = () => {
    console.log("Video 1");
    video.poster = false;
    video.src = video3.src;
    video.muted = false;
    video1.style.border = "none";
    video2.style.border = "none";
    video3.style.border = "dotted #0a0a0a 5px";
    imgprueba.style.border = "none";

  };

  prueba.onclick = () => {
    console.log("Video 1");
    video.poster = imgprueba.src;
    video.src = false;
    video1.style.border = "none";
    video2.style.border = "none";
    video3.style.border = "none";
    imgprueba.style.border = "dotted #0a0a0a 5px";

  };

  setInterval(()=>{
    if(bucle){
      if (video.currentTime > fin){
        video.currentTime = inicio;
      }else if (video.currentTime < inicio) {
        video.currentTime = inicio;
      }
    }
  },10);

loop.onclick = () => {
  console.log('Bucle');
  loop.style.border = "dotted #0a0a0a 5px";
  noloop.style.border = "none";
  video.currentTime = 2;
  bucle = true;
}

noloop.onclick = () => {
  console.log('Normal');
  loop.style.border = "none";
  noloop.style.border = "dotted #0a0a0a 5px";
  video.currentTime = 0;
  bucle = false;
}
