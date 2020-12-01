/**
 * Esta función permite darle atributos al tomb para construirlo y moverlo.
 * 
 * @constructor
 * @param {number} x
 * @param {number} y
 */
function Tomb(x,y){ //Tenemos que tomb tendra su prpia posición en X y su propia posición en Y
    this.x = x;
    this.y = y;
    this.direction = 0;
    this.radius = 15;
    
    this.show = function(){ //Se dibuja/muestra el tomb en el canvas
        image(tombImg,this.x,this.y,30,30); //Imagen en su respectiva posición.
    }

    this.move = function(d){
        this.direction = d;
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
    }

    this.eat = function(comida){
        var dis = dist(this.x,this.y,comida.x,comida.y);
        if(dis < this.radius + comida.radius){
            return true;
        } else return false;
    }
    
    this.eatPower = function(power){
        var dis = dist(this.x,this.y,power.x,power.y);
        if(dis < this.radius + power.radius){
            return true;
        } else return false;
    }

    this.colission = function(enemy){
        var dis = dist(this.x,this.y,enemy.x,enemy.y);
        if(dis < this.radius + enemy.radius){
            return true;
        } else return false;
    }
    this.colissionWall = function(enemyWall){
        var dis = dist(0,this.y,0,enemyWall.y);
        if(dis < this.radius + enemyWall.radius){
            return true;
        } else return false;
    }
} 