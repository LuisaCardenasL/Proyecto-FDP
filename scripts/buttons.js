/**
 * Constantes para los audios.
 * 
 * Aca se encuentran las constantes para poder manipular los botones de los audios. 
 */
const audioTomb = document.getElementById("audio"),
      audioGame = document.getElementById("audio-two"),
      playAudioButton = document.getElementById("play-audio"),
      pauseAudioButton = document.getElementById("pause-audio"),
      playAudioButtonTwo = document.getElementById("play-audio-two"),
      pauseAudioButtonTwo = document.getElementById("pause-audio-two"),
      configModal = document.getElementById("configuration-modal"),
      configButton = document.getElementById("configuration")

playAudioButton.addEventListener("click", () => {
  audioTomb.play()
})
pauseAudioButton.addEventListener("click", () => {
  audioTomb.pause()
})
playAudioButtonTwo.addEventListener("click", () => {
  audioGame.play()
})
pauseAudioButtonTwo.addEventListener("click", () => {
  audioGame.pause()
})
/**
 * Constantes para contenedores y botones.
 * 
 * Aca se encuentran las constantes para poder manipular los contenedores y botones del juego.
 */
const playButton = document.getElementById("play-button"),
      intButton = document.getElementById("int-button"),
      hisButton = document.getElementById("his-button"),
      intModal = document.getElementById("instructions"),
      hisModal = document.getElementById("history"),
      closeButton = document.getElementById("close"),
      closeTwoButton = document.getElementById("close-two"),
      closeThreeButton = document.getElementById("close-three"),
      canvasContainer = document.getElementById("canvas-container"),
      pointsGame = document.getElementById("points"),
      livesGame = document.getElementById("lives"),
      mainMenu = document.getElementById("main-menu"),
      playGameButton = document.getElementById("play-game"),
      pauseGameButton = document.getElementById("pause-game")
      containerMail = document.getElementById("aside"),
      containerSwitch = document.getElementById("aside-mode"),
      pauseContainer = document.getElementById("pause-container"),
      youWinContainer = document.getElementById("youwin-container"),
      gameOverContainer = document.getElementById("gameover-container"),
      mainMenuContainer = document.getElementById("button-main-menu-container"),
      mobileControls = document.getElementById("mobile-controls")

playButton.addEventListener("click",() => {
        playButton.style.display = "none"
        hisButton.style.display = "none"
        intButton.style.display = "none"
        audioGame.play()
        audioTomb.pause()
        playAudioButton.style.display = "none"
        pauseAudioButton.style.display = "none"
        playAudioButtonTwo.style.display = "inline-block"
        pauseAudioButtonTwo.style.display = "inline-block"
        canvasContainer.style.display = "block"
        pointsGame.style.display = "block"
        livesGame.style.display = "block"
        playGameButton.style.display = "none"
        pauseGameButton.style.display = "block"
        containerMail.style.top = "30%"
        containerSwitch.style.top = "35%"
        mainMenuContainer.style.display = "flex"
        mobileControls.style.display = "grid"
        playGame = true;
      })
mainMenu.addEventListener("click",() => {
        playButton.style.display = "block"
        hisButton.style.display = "block"
        intButton.style.display = "block"
        audioGame.pause()
        audioTomb.play()
        playAudioButton.style.display = "inline-block"
        pauseAudioButton.style.display = "inline-block"
        playAudioButtonTwo.style.display = "none"
        pauseAudioButtonTwo.style.display = "none"
        canvasContainer.style.display = "none"
        pointsGame.style.display = "none"
        livesGame.style.display = "none"
        playGameButton.style.display = "none"
        pauseGameButton.style.display = "none"
        containerMail.style.top = "45%"
        containerSwitch.style.top = "45%"
        pauseContainer.style.display = "none"
        mainMenuContainer.style.display = "none"
        mobileControls.style.display = "none"
        playGame = false;
      })
playGameButton.addEventListener("click", () => {
  pauseContainer.style.display = "none"
  playGameButton.style.display = "none"
  pauseGameButton.style.display = "block"
  playGame = true;
})
pauseGameButton.addEventListener("click", () => {
  pauseContainer.style.display = "flex"
  playGameButton.style.display = "block"
  pauseGameButton.style.display = "none"
  playGame = false;
})
intButton.addEventListener("click",() => {
        playButton.style.display = "none"
        intButton.style.display = "none"
        hisButton.style.display = "none"
        intModal.style.display = "block"
      })
hisButton.addEventListener("click",() => {
        playButton.style.display = "none"
        intButton.style.display = "none"
        hisButton.style.display = "none"
        hisModal.style.display = "block"
      })
configButton.addEventListener("click",() => {
        playButton.style.display = "none"
        intButton.style.display = "none"
        hisButton.style.display = "none"
        configModal.style.display = "block"
      })
closeButton.addEventListener("click",() => {
        playButton.style.display = "block"
        intButton.style.display = "block"
        hisButton.style.display = "block"
        intModal.style.display = "none"
      })
closeTwoButton.addEventListener("click",() => {
        playButton.style.display = "block"
        intButton.style.display = "block"
        hisButton.style.display = "block"
        hisModal.style.display = "none"
      })
closeThreeButton.addEventListener("click",() => {
        playButton.style.display = "block"
        intButton.style.display = "block"
        hisButton.style.display = "block"
        configModal.style.display = "none"
        hisModal.style.display = "none"
        intModal.style.display = "none"
      })