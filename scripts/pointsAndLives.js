/**
 * Esta función es ejecutada cada vez que el tombMask coma un punto.
 */
function updatePoints(){
    var pointText;
    puntaje++
    pointText = puntaje
    document.getElementById("point-text").innerText = pointText
    document.getElementById("point-text-two").innerText = pointText
    document.getElementById("point-text-three").innerText = pointText
    if(comidas.length === 0){
        /**
         * Las contantes de los
         * botones, 
         * contenedores,
         * entre otros 
         * del DOM usados en esta condicional se encuentran en el archivo buttons.js
         */
        youWinContainer.style.display = "flex"
        playAudioButtonTwo.style.display = "none"
        pauseAudioButtonTwo.style.display = "none"
        pointsGame.style.display = "none"
        livesGame.style.display = "none"
        audioGame.pause()
        audioTomb.play()
        playGameButton.style.display = "none"
        pauseGameButton.style.display = "none"
        mainMenu.style.display = "none"
        playGame = false;
    }
}
/**
 * Esta función es ejecutada cada vez que el tombMask choque unicamente con los enemigos/skulls.
 */
function updateLives(){
    var liveText;
    vidas--
    liveText = vidas
    document.getElementById("live-text").innerText = liveText
    document.getElementById("live-text-two").innerText = liveText
    if(vidas === 0){
        /**
         * Las contantes de los
         * botones, 
         * contenedores,
         * entre otros 
         * del DOM usados en esta condicional se encuentran en el archivo buttons.js
         */
        gameOverContainer.style.display = "flex"
        playAudioButtonTwo.style.display = "none"
        pauseAudioButtonTwo.style.display = "none"
        pointsGame.style.display = "none"
        livesGame.style.display = "none"
        audioGame.pause()
        audioTomb.play()
        playGameButton.style.display = "none"
        pauseGameButton.style.display = "none"
        mainMenu.style.display = "none"
        playGame = false;
    }
}