var hideWindow = document.getElementById("hideWindow");
var arrowExit = document.getElementById("arrowExit");

function closeWindow() {
  hideWindow.style.height = "92px";
  hideWindow.style.visibility = "hidden";
}

arrowExit.addEventListener("click", closeWindow);

$(document).ready(function () {
  $(".header_burger").click(function (event) {
    $(".header_burger, nav").toggleClass("active");
    $("body").toggleClass("lock");
  });
});
