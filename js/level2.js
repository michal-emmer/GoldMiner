level2 = function () {
    end = 0;
    return [
        new Images('hnede_pozadie', 0, 60, 800, 600),
        new Images('modre_pozadie', 0, 0, 800, 120, 0, 0, 800, 120),
        new Images('miner_cart', 175, 0, 100, 120),
        new Button('gameover', 600, 500, 60, 60, "exit"),
        new Button('sound', 700, 500, 60, 60, "sound_on"),
        new Small_gold(240, 300),
        new Small_gold(340, 240),
        new Small_gold(500, 300),
        new Small_gold(260, 440),
        new Small_gold(500, 440),
        new Stone(60, 300),
        new Stone(200, 360),
        new Stone(580, 240),
        new Stone(360, 380),
        new Stone(720, 240),
        new Big_gold(80, 360),
        new Big_gold(340, 440),
        new Big_gold(620, 300),
        new Diamond(40,460),
        new Diamond(600,440),
        new Timer(2, 3000),
        new Hook(370,80)
    ];
};