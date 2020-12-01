/**
 * @fileoverview Kalter of the Mask | proyecto FDP
 * 
 * @version 1.3.9
 * 
 * @author Sebastian Alexis Cespedes <sebastian.cespedes@correounivalle.edu.co>
 * @author Johan Loaiza <loaiza.johan@correounivalle.edu.co>
 * @author Luisa Cardenas <cardenas.luisa@correounivalle.edu.co>
 * @author Juan Pablo Pantoja <juan.pablo.pantoja@correounivalle.edu.co>
 * @author Yeison Ponce <yeison.ponce@correounivalle.edu.co>
 * 
 * History | Historial
 * RC 1.3.9 - Optimización de metadatos.
 * RC 1.3.8 - Documentación del código.
 * RC 1.3.7 - Juego completamente adaptable a cualquier dispositivo.
 * ....
 */

let playGame = false; //Estado del juego.

//Imágenes del juego.
var rocaImg; //Variable de imagen para los muros.
var comidaImg; //Variable de imagen para los puntos.
var powerupImg; //Variable de imagen para powerup de retroceder el gas.
var skullImg; //Variable de imagen para los enemigos(Calaveras/Skulls).
var aquaImg; //Variable de imagen para el gas/aqua.

//Personajes, enemigos, powerups, etc.
var tombMask; //Variable para el personaje de Tomb.
var plat; //Variable que referencia a la plataforma en platform.js.
var rocas = []; //Todas las paredes/rocas del mundo.
var comidas = []; //Todos los puntos del mundo.
var power = []; //Todos los powerups del mundo.
var skull = []; //Todos los enemigos/skulls del mundo.
var aqua = []; //Aqua por bloques.

//Otros.
var puntaje = 0; //Variable que aumenta dependiendo de los puntos que obtenga el jugador.
var vidas = 3; //Variable que decrece dependiendo la colisión de Tomb con los enemigos/skulls.
var actualFrame = 10; //Frames con la que se reproduce/dibuja el juego.
/**
 * P5.js Function.
 */
function preload(){ //Cargar todas las imágenes para poder utilizarlas en nuestro juego.
    rocaImg = loadImage("images/bricks.svg") //Cargar la imagen especifica de los muros.
    comidaImg = loadImage("images/world-points.svg"); //Cargar la imagen especifica de la comida/puntos.
    powerupImg = loadImage("images/freeze.svg"); //Cargar la imagen especifica de los powerups/poderes.
    tombImg = loadImage("images/tomb.svg"); //Cargar la imagen especifica del Tomb.
    skullImg = loadImage("images/skull.svg"); //Cargar la imagen especifica del enemigo calavera/skull.
    aquaImg = loadImage("images/aqua.svg"); //Cargar la imagen especifica del gas/aqua.
}
/**
 * P5.js Function.
 */
function setup() { //Configuración de nuestro juego.
    var canvas = createCanvas(900, 540); //Crear canvas y guardar en variable. Mover el canvas para que este en el <div id="sketch-holder">.
    canvas.parent('sketch-holder'); //Reconocer el div contenedor por su ID.
    plat = new Plataforma(); //Se guarda la función Plataforma() de platform.js en la variable para utilizarla en las siguientes condicionales.
    for(var i = 0; i < plat.filas; i++){ //Recorrer las filas de la plataforma de la funcion plataforma();
        for(var j = 0; j < plat.columnas; j++){ //Recorrer las columnas de la plataforma de la funcion plataforma();
            if(plat.plataform[i][j] === "*"){ //"Preguntar si en la posición i y j hay un asterisco (*)
                rocas.push(new Roca(j * 30,i * 30)) //Insertar las posiciones de la roca/pared en el arreglo vacio de rocas (linea 31)
            }
            if(plat.plataform[i][j] === "-"){ //"Preguntar si en la posición i y j hay un simbolo menos (-)
                comidas.push(new Comida(j * 30,i * 30)) //Insertar las posiciones de la comida en el arreglo vacio de comidas (linea 32)
            }
            if(plat.plataform[i][j] === "+"){ //"Preguntar si en la posición i y j hay un simbolo más (+)
                power.push(new Powerup(j * 30,i * 30)) //Insertar las posiciones de los superpoderes/powerups en el arreglo vacio de power (linea 33)
            }
            if(plat.plataform[i][j] === "T"){ //"Preguntar si en la posición i y j hay una T
                tombMask = new Tomb(j * 30,i * 30); //Insertar la posicion del tomb en la variable tombMask (linea 29)
            }
            if(plat.plataform[i][j] === "S"){ //"Preguntar si en la posición i y j hay una S
                skull.push(new Skull(j * 30,i * 30)) //Insertar las posiciones de los enemigos/skulls en el arreglo vacio de skull (linea 34)
            }
            if(plat.plataform[i][j] === "A"){ //"Preguntar si en la posición i y j hay una A
                aqua.push(new Aqua(j * 30,i * 30)) //Insertar las posiciones del gas/aqua en el arreglo vacio de aqua (linea 35)
            }
        }
    }
}
/**
 * P5.js Function.
 */
function draw(){ //Dibujar elementos del mundo/plataforma en canvas.
    background(0, 0, 0); //Dibujar el fondo negro del juego en modo RGB.
    
    for(var i = 0; i < rocas.length; i++){ //Recorrer el tamaño de la lista del arreglo walls.
        rocas[i].show(); //En el subindice i de la lista/arreglo walls, dibujarla/mostrarla en el mundo. (Archivo wall.js)
    }
    for(var i = 0; i < comidas.length; i++){ //Recorrer el tamaño de la lista del arreglo comidas.
        comidas[i].show(); //En el subindice i de la lista/arreglo comidas, dibujarla/mostrarla en el mundo. (Archivo comida.js)
    }

    for(var i = 0; i < power.length; i++){ //Recorrer el tamaño de la lista del arreglo power.
        power[i].show(); //En el subindice i de la lista/arreglo comidas, dibujarla/mostrarla en el mundo. (Archivo powerup.js)
    }

    tombMask.show(); //Dibujar/mostrar el personaje en el mundo.
    
    for(var i = 0; i < skull.length; i++){ //Recorrer el tamaño de la lista del arreglo skull.
        frameRate(actualFrame); //Reducir la velocidad en la que se dibuja todo el juego, para que los enemigos se muevan más lento.
        if(playGame){ //Condicional para mover/pausar el movimiento del enemigo.
            skull[i].move(rocas); //Mover al enemigo
        }
        skull[i].show(); //En el subindice i de la lista/arreglo skull, dibujarla en el mundo. (Archivo Skull.js).
        if(tombMask.colission(skull[i])){ //Si el tomb colisiona con la el skull/enemigo (Archivo tomb.js).
            updateLives(); //Actualizar las vidas con la función updateLives (Archivo pointsAndLives.js).
        }
    }
    
    for(var i = 0; i < comidas.length; i++){ //Recorrer el tamaño de la lista del arreglo comidas para poder eliminarlas del mundo.
        if(tombMask.eat(comidas[i])){ //Si el tomb come/pasa por la comida,
            comidas.splice(i,1); //Eliminar esa comida de la posicion en el arreglo comidas.
            updatePoints(); //Actualizar los puntos con la función updatePoints (Archivo pointsAndLives.js).
        }
    }

    for(var i = 0; i < power.length; i++){ //Recorrer el tamaño de la lista del arreglo power.
        if(tombMask.eatPower(power[i])){ //Si el tomb come/pasa por un power,
            power.splice(i,1); //Eliminar ese power de la posicion en el arreglo power.
            let moveAqua = DecreaseAqua(false); //Guardar la función DecreaseAqua (linea 185) en la variable.
            do {
                setTimeout(() => {
                DecreaseAqua(true)
                },5000);  //Hacer que el aqua decrezca durante 5 segundos (5000 ms).
            } while (moveAqua); //Luego restableece su movimiento hacia arriba/pasa a false.
        } 
    }
    
    
    for(var i = 0; i < aqua.length; i++){ //Recorrer el tamaño de la lista del arreglo aqua para poder eliminarlos del mundo.
        if(playGame){ //Condicional para mover/pausar el moviminento del agua.
            aqua[i].move(true); //Mover el aqua
        }
        aqua[i].show(); //En el subindice i de la lista/arreglo aqua, dibujarla en el mundo. (Archivo aqua.js).
        if(tombMask.colission(aqua[i])){ //Si el tomb colisiona con el agua muere instantaneamente.
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
            playGame = false; //Parar/pausar el juego.
        }
    }
}
/**
 * P5.js Function.
 */
function keyPressed(){ //Función para "escuchar" las flechas del teclado.
    if(playGame){ //Condicional para poder mover/no mover el tomb en el mundo.
        if (keyCode === RIGHT_ARROW){ //Código de la flecha derecha
            if(plat.plataform[tombMask.y/30][tombMask.x/30 + 1] !== "*"){ //Anticipar el muro por 1 en X
                tombMask.move(0); //Mover el tomb hacia la derecha = 0
            }
        }
        if (keyCode === DOWN_ARROW){ //Código de la flecha abajo
            if(plat.plataform[tombMask.y/30 + 1][tombMask.x/30] !== "*"){ //Anticipar el muro por 1 en Y
                tombMask.move(1); //Mover el tomb hacia abajo = 1
            }
        }
        if(keyCode === LEFT_ARROW){ //Código de la flecha izquierda
            if(plat.plataform[tombMask.y/30][tombMask.x/30 - 1] !== "*"){ //Anticipar el muro por -1 en X
                tombMask.move(2); //Mover el tomb hacia la izquierda = 2
            }
        }
        if(keyCode === UP_ARROW){ //Código de la flecha arriba
            if(plat.plataform[tombMask.y/30 - 1][tombMask.x/30] !== "*"){ //Anticipar el muro por -1 en Y
                tombMask.move(3); //Mover el tomb hacia arriba = 3
            }
        }
    }
}
/**
 * Función para decrecer el agua durante 5 segundos 
 *
 * @param {boolean} d - Recibir true!false dependiendo si se come un power (Ver lineas 119 - 129)
 */
function DecreaseAqua(d){
    for(var i = 0; i < aqua.length; i++){ //Recorrer el arreglo de aqua (linea)
        aqua[i].movement = d;
    }
}
