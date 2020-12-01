/**
 * Modo uscuro.
 * 
 * Aca se encuentran los selectores/contenedores para poder manipular la clase en el body. 
 */
const buttonSwitch = document.getElementById("switch"),
      buttonSwitchTwo = document.getElementById("switch-two")

/**
 * Switch para escritorio.
 */
buttonSwitch.addEventListener("click", () => {
    document.body.classList.toggle("dark")
    buttonSwitch.classList.toggle("active")
})
/**
 * Switch para movil.
 */
buttonSwitchTwo.addEventListener("click", () => {
    document.body.classList.toggle("dark")
    buttonSwitchTwo.classList.toggle("active")
})