console.log("llego");
parrafo = document.querySelector("button");
function pintar(event, color) {
  event.style.backgroundColor = color;
}
ele = document.getElementById("ele1");
ele.addEventListener("click", function () {
  pintar(ele, "yellow");
});

var colorTecla;
document.addEventListener("keydown", function (event) {
  if (event.key === "a") {
    colorTecla = "black";
  } else if (event.key === "s") {
    colorTecla = "#33FFFC";
  } else if (event.key === "d") {
    colorTecla = "#AF33FF";
  }
});

function changeColor(id) {
  if (colorTecla) {
    document.getElementById(id).style.backgroundColor = colorTecla;
  }
}
