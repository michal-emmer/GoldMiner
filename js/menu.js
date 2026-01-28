menu = function () {
    return [
        new Images('hnede_pozadie', 0, 0, 800, 600),
        new Images('miner_menu', 0, 80, 250, 250),
        new Button('level1', 300, 200, 170, 50, "play"),
        new Button('instructions', 300, 275, 170, 50, "instructions"),
        new Big_gold(340, 40),
        new Text('40pt Arial', 'Gold Miner', 250, 170)
    ];
};