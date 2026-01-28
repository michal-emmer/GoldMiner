class Button {
    // Initialization
    constructor(id, x, y, width, height, imgName) {
        this.physical = false;
        this.canvas = document.getElementById("canvas");
        this.image = resourceManager.getImageSource(imgName);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.id = id;
    }

    // Movement logic
    move(dt) {
        // sledujeme polohu mysky a podla ID rozoznavame jednotlive tlacidla
        if (game.mousePosition.x > this.x
            && game.mousePosition.y > this.y
            && game.mousePosition.x < (this.x + this.width)
            && game.mousePosition.y < (this.y + this.height)) {
            if (game.mousePressed) {
                //debugger;
                if (this.id == 'level1') {
                    if (game.game_music.play_started) {
                        game.game_music.sound.volume = 1;
                        game.game_music.refresh();
                    }
                    console.log(game.game_music.play_started);
                    game.menu_music.stop();
                    game.objects = level1();
                    game.mousePressed = false;
                }
                if (this.id == 'menu') {
                    if (game.menu_music.play_started) {
                        game.menu_music.play();
                    }
                    game.objects = menu();
                    game.mousePressed = false;
                }
                if (this.id == 'instructions') {
                    game.objects = instructions();
                    game.mousePressed = false;
                }
                if (this.id == 'gameover') {
                    if (game.game_music.play_started) {
                        game.menu_music.play();
                    }
                    game.game_music.sound.volume = 0;
                    game.objects = gameover();
                    game.mousePressed = false;
                }
                if (this.id == 'sound') {
                    if (game.game_music.play_started) {
                        game.game_music.stop();
                        game.clickSound.sound.volume = 0;
                        game.diamond_sound.sound.volume = 0;
                        game.gold_sound.sound.volume = 0;
                        game.stone_sound.sound.volume = 0;
                        game.hook_sound.sound.volume = 0;
                        game.level_sound.sound.volume = 0;
                        game.tnt_sound.sound.volume = 0;
                    }
                    else {
                        game.game_music.play();
                        game.game_music.sound.volume = 1;
                        game.clickSound.sound.volume = 1;
                        game.diamond_sound.sound.volume = 1;
                        game.gold_sound.sound.volume = 1;
                        game.stone_sound.sound.volume = 1;
                        game.hook_sound.sound.volume = 0.3;
                        game.level_sound.sound.volume = 1;
                        game.tnt_sound.sound.volume = 1;
                    }
                    game.mousePressed = false;
                }
            }
            console.log("hover: " + this.id);           // debugger
        }
    }

    // Render self
    draw(ctx) {         // vykreslenie tlacidla
        ctx.save()
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
        ctx.restore()
    }
}