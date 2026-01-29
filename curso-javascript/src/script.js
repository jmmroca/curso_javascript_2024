fetch("menu.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("menu-container").innerHTML = data;
  })
  .catch((error) => {
    console.error("Error cargando el menú:", error);
  });

fetch("001-variables.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("content-container").innerHTML = data;
    Prism.highlightAll();
  })
  .catch((error) => {
    console.error("Error cargando el contenido:", error);
  });
