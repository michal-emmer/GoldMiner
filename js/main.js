const resourceManager = new ResourceManager();      // zavolanie resource managera, ktory obsahuje vsetky obrazky
var score = 0;          
var max_score = 0;
var end = 1;            // globalna premenna na urcenie sceny, zaciname v menu, tak preto je hodnota inicializovana na 1 
window.onmousemove = function (event) {         // tieto zakladne funkcie spracovavaju vstup z klavesnice a mysi su definovane v game
    game.onmousemove(event);
}
window.onmousedown = function (event) {
    game.onmousedown(event);
}
window.onmouseup = function (event) {
    game.onmouseup(event);
}
window.onkeydown = function (event) {
    game.onkeydown(event);
}
window.onkeyup = function (event) {
    game.onkeyup(event);
}
const game = new Game();        // vytvorenie objektu Hra
game.start();                   // zavolanie zaciatku hry

