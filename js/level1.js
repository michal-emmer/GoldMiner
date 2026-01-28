level1 = function () {
    end = 0;        // nastavujeme na 0, aby sme vedeli, ze sme v hre
    score = 0;      // vynulujeme na zaciatku
    return [
        new Images('hnede_pozadie', 0, 60, 800, 600),
        new Images('modre_pozadie', 0, 0, 800, 120, 0, 0, 800, 120),
        new Images('miner_cart', 175, 0, 100, 120),
        new Button('gameover', 600, 500, 60, 60, "exit"),
        new Button('sound', 700, 500, 60, 60, "sound_on"),
        new Small_gold(340, 320),
        new Small_gold(500, 400),
        new Small_gold(500, 240),
        new Stone(60, 360),
        new Stone(200, 360),
        new Stone(160, 200),
        new Stone(580, 300),
        new Stone(420, 360),
        new Stone(540, 180),
        new Stone(660, 180),
        new Big_gold(100, 400),
        new Big_gold(340, 440),
        new Big_gold(660, 340),
        new Timer(1, 1000),
        new Hook(370,80)
    ];
};