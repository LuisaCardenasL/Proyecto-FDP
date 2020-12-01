/**
 * Este archivo evita que puedan usar los shortcuts del teclado y clic derecho para ver el código fuente.
 */
window.addEventListener("contextmenu", e => {
  e.preventDefault();
})
window.addEventListener("keydown", e => {
  if(e.ctrlKey && e.key == "u"){
    e.preventDefault();
  }
  if(e.ctrlKey && e.key == "s"){
    e.preventDefault();
  }
  if(e.ctrlKey && e.key == "p"){
    e.preventDefault();
  }
  if(e.ctrlKey && e.key == "c"){
    e.preventDefault();
  }
  if(e.ctrlKey && e.path.shiftKey && e.key == "i"){
    e.preventDefault();
  }
  if(e.ctrlKey && e.shiftKey && (e.key == "i" || e.key == "I")){
    e.preventDefault();
  }
})
/**
 * Cualquier intento en redimensionar la ventana se considera como un intento de ver el código fuente.
 */
window.addEventListener("resize", e => {
  //console.log(e);
  alert("¿Tratando de ver el código? Hoy no!!");
  window.close();
})