console.log("Ejecutando JS...");

//----- Obtener elemento de video y configurarlo
  const video = document.getElementById("video");
  video.poster = "https://raw.githubusercontent.com/mdelaosa/videosP4CSAAI/master/intro.gif";
  video.width = 720;  //-- Tamaño de la pantalla de video

  const video1 = document.getElementById("video1")
  video1.src = "https://github.com/mdelaosa/videosP4CSAAI/raw/master/present.mp4"
  video1.width = 300;  //-- Tamaño de la pantalla de video

  const video2 = document.getElementById("video2")
  video2.src = "https://github.com/mdelaosa/videosP4CSAAI/raw/master/Beyonce.mp4"
  video2.width = 300;  //-- Tamaño de la pantalla de video

  const video3 = document.getElementById("video3")
  video3.src = "https://github.com/mdelaosa/videosP4CSAAI/raw/master/million%20dollars.mp4"
  video3.width = 300;  //-- Tamaño de la pantalla de video

  const imgprueba = document.getElementById("imgprueba");
  imgprueba.src = "https://raw.githubusercontent.com/mdelaosa/videosP4CSAAI/master/prueba.jpeg";
  imgprueba.width=300;

  var loop = document.getElementById("loop");
  const init = 8;
  const finish = init + 2;
  loop.onclick = () => {
    video4.loop=true;
    console.log("loop");
  };

  var manual = document.getElementById("manual");
  manual.onclick = () => {
    video.muted=false;
    console.log("manual");
  };

  video1.onclick = () => {
  console.log("Video 1");
    video.poster = false;
    video.src = video1.src;
    video.muted = false;
    video1.style.border = "doted";
    video2.style.border = "none";
    video3.style.border = "none";
    imgprueba.style.border = "none";

};
