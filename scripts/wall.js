/**
 * Esta función permite darle atributos a la pared/roca para construirla.
 * 
 * @constructor
 * @param {number} x
 * @param {number} y
 */
function Roca(x,y){ //Tenemos que cada pared tendra su prpia posición en X y su propia posición en Y
    this.x = x;
    this.y = y;
    this.radius = 15;

    this.show = function(){ //Se dibujan las paredes en el canvas.
        image(rocaImg,x,y,30,30); //Imagen en su respectiva posición.
    }
}