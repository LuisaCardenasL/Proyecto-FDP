/**
 * Constantes para contenedores y botones en movil.
 * 
 * Aca se encuentran las constantes para poder manipular los contenedores y botones del juego en el movil.
 */
const leftButton = document.getElementById("go-left"),
      rightButton = document.getElementById("go-right"),
      upButton = document.getElementById("go-up"),
      downButton = document.getElementById("go-down")
      

leftButton.addEventListener("click",() => {
  keyPressed(keyCode = LEFT_ARROW)
})
rightButton.addEventListener("click",() => {
  keyPressed(keyCode = RIGHT_ARROW)
})
upButton.addEventListener("click",() => {
  keyPressed(keyCode = UP_ARROW)
})
downButton.addEventListener("click",() => {
  keyPressed(keyCode = DOWN_ARROW)
})
