level3 = function () {
    end = 0;
    return [
        new Images('hnede_pozadie', 0, 60, 800, 600),
        new Images('modre_pozadie', 0, 0, 800, 120, 0, 0, 800, 120),
        new Images('miner_cart', 175, 0, 100, 120),
        new Button('gameover', 600, 500, 60, 60, "exit"),
        new Button('sound', 700, 500, 60, 60, "sound_on"),
        new Hook(370,80),
        new Small_gold(100, 200),
        new Small_gold(340, 300),
        new Small_gold(600, 220),
        new Stone(60, 300),
        new Stone(200, 360),
        new Stone(540, 320),
        new Stone(640, 440),
        new Big_gold(80, 360),
        new Big_gold(520, 380),
        new Big_gold(700, 300),
        new Diamond(290, 460),
        new Diamond(360, 400),
        new Diamond(430, 460),
        new Diamond(640, 300),
        new Tnt(630, 360),
        new Tnt(350, 460),
        new Timer(3,5000),
        new Hook(370,80)
    ];
};