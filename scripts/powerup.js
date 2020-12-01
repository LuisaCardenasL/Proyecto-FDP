/**
 * Esta función permite darle atributos al power para construirla.
 * 
 * @constructor
 * @param {number} x
 * @param {number} y
 */
function Powerup(x,y){
    this.x = x;
    this.y = y;
    this.radius = 15;

    this.show = function(){
        image(powerupImg,x,y,30,30);
    }
}