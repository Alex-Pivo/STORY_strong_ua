var hideWindow = document.getElementById("hideWindow");
var arrowExit = document.getElementById("arrowExit");

function closeWindow() {
  hideWindow.style.display = "none";
}

arrowExit.addEventListener("click", closeWindow);
