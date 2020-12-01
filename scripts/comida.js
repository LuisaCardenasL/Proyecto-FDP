/**
 * Esta función permite darle atributos a la comida/puntos para construirla.
 *
 * @constructor
 * @param {number} x
 * @param {number} y
 */
function Comida(x,y){
    this.x = x;
    this.y = y;
    this.radius = 15;

    this.show = function(){
        image(comidaImg,x,y,30,30)
    }
}