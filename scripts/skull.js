/**
 * Esta función permite darle atributos al enemigo/skull para construirlo y moverlo.
 * 
 * @constructor
 * @param {number} x
 * @param {number} y
 */
function Skull(x,y){ //Tenemos que los enemigos/skulls tendran su prpia posición en X y su propia posición en Y
    this.x = x;
    this.y = y;
    this.direction = 0;
    this.radius = 15;
    this.movement = true;
    
    this.show = function(){ //Se dibujan los enemigos/skulls en el mundo
        image(skullImg,this.x,this.y,30,30); //Imagen en su respectiva posición.
    }
    this.move = function(bricks){
        if(this.movement == false){
            var d = floor(random(4));
            this.direction = d;
        }
        var lastx = this.x;
        var lasty = this.y;
        if(this.direction === 0){
            this.x += 30;
        } 
        if(this.direction === 1){
            this.y += 30;
        }
        if(this.direction === 2){
            this.x -= 30;
        } 
        if(this.direction === 3){
            this.y -= 30;
        }
        for(var i = 0; i < bricks.length;i++){
            if(this.colission(bricks[i])){
                this.x = lastx;
                this.y = lasty;
                this.movement = false;
                this.move(bricks); //Usamos recursividad y volvemos al metodo .move()
            } else {
                this.movement = true;
            }
        }
    }
    this.colission = function(roca){
        var dis = dist(this.x,this.y,roca.x,roca.y);
        if(dis < this.radius + roca.radius){
            return true;
        } else return false;
    }
}