/**
 * Esta función permite darle atributos al aqua para construirla y moverla.
 * 
 * @constructor
 * @param {number} x
 * @param {number} y
 */
function Aqua(x,y){ 
    this.x = x;
    this.y = y;
    this.direction = 0;
    this.radius = 1;
    this.movement = true;
    
    this.show = function(){ //Se dibuja el aqua en el canvas.
        image(aquaImg,this.x,this.y,30,540); //Imagen en su respectiva posición
    }
    this.move = function(){ //Mover el aqua en el eje Y unicamente.
        if(this.movement == false){
            this.y += 0.5;
        } else {
            this.y -= 0.5;
        }
    }
    
}
