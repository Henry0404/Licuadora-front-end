/* var estadoLicuadora = "apagado";

function controlarLicuadora() {
  if (estadoLicuadora == "apagado") {
    estadoLicuadora = "encendido";
    console.log("me encendiste");
  } else {
    estadoLicuadora = "apadago";
    console.log("me apagaste");
  }
}
 */

var estadoLicuadora = "apagado";
var licuadora = document.getElementById("blender");
var sonidoLicuadora = document.getElementById("blender-sound");
var sonidoBotonLicuadora = document.getElementById("blender-button-sound");

function controlarLicuadora() {
  if (estadoLicuadora == "apagado") {
    estadoLicuadora = "encendido";
    hacerBrrbrr();
    licuadora.classList.add("active");
    console.log("me encendiste");
  } else {
    estadoLicuadora = "apagado";
    hacerBrrbrr();
    licuadora.classList.remove("active");
    console.log("me apagaste");
  }
}
function hacerBrrbrr() {
  if (sonidoLicuadora.paused) {
    sonidoBotonLicuadora.play();
    sonidoLicuadora.play();
  } else {
    sonidoBotonLicuadora.play();
    sonidoLicuadora.pause();
    sonidoLicuadora.currentTime = 0;
  }
}
