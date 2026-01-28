gameover = function () {
    end = 1;
    return [
    new Images('zlate_pozadie', 0, 0, 800, 600),
    new Images('minergameover', 10, 70, 250, 250),
    new Button('level1', 300, 250, 170, 50, "playagain"),
    new Button('menu', 300, 325, 170, 50, "back_to_menu"),
    new Text('40pt Arial','Game Over', 250, 120),
    new Score()
    ];
};