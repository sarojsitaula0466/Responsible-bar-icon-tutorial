var x = document.querySelector(".mobile-icon");
x.addEventListener("click", slideShow);

function slideShow() {
  var y = document.getElementById("responsive-web");
  if (y.style.display === "none") {
    y.style.display = "block";
  } else {
    y.style.display = "none";
  }
}
