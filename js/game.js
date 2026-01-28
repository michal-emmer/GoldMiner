class Game {
    constructor() {
        this.canvas = document.getElementById("canvas");           // vytvorenie canvasu
        this.game_music = new Sound("./sounds/2018-10-06_-_Silly_Chicken_-_David_Fesliyan.mp3");
        this.game_music.loop = true;
        this.menu_music = new Sound("./sounds/menu_gameover_foolboymedia__sky-loop.wav");
        this.menu_music.play_started = true;
        this.game_music.play_started = true;
        this.menu_music.loop = true;
        this.diamond_sound = new Sound("./sounds/diamond_catch.wav");
        this.gold_sound = new Sound("./sounds/gold_catch.wav");
        this.stone_sound = new Sound("./sounds/stone_catch.wav");
        this.hook_sound = new Sound("./sounds/hook_launch.wav");
        this.hook_sound.sound.volume = 0.3;
        this.level_sound = new Sound("./sounds/level_switch.wav");
        this.tnt_sound = new Sound("./sounds/tnt_explosion.wav");
        this.clickSound = new Sound("./sounds/click_sound.wav");
        this.clickSound.sound.volume = 1;
        this.keys = [];             // sem sa ukladaju kody stlacenych klaves, aby sme ich vedeli identifikovat
        this.mousePosition = {      // inicializacia suradnic mysky
            x: 0,
            y: 0
        };
        this.mousePressed = false;
    }

    // Controller

    onmousemove(event) {    // sledovanie suradnic pri pohybe mysky 
        this.mousePosition.x = event.offsetX || event.layerX;
        this.mousePosition.y = event.offsetY || event.layerY;
    };
    onmousedown(event) {    // akcia pri stlaceni tlacidla mysky
        this.mousePressed = true;
        this.click = true;
        this.clickSound.sound.play();
    };
    onmouseup(event) {      // akcia pri pusteni tlacidla mysky
        this.mousePressed = false;
        this.click = false;
    };
    onkeydown(event) {      // akcia pri stlaceni klavesy
        this.keys[event.keyCode] = true;
    };
    onkeyup(event) {        // akcia pri pusteni klavesy
        this.keys[event.keyCode] = false;
    };



    // Set up canvas for 2D rendering

    ctx = canvas.getContext("2d");          // definicia kontextu a priradenie do premennej ctx

    async start() {
        console.log('starting game');
        await resourceManager.init();   // nacitanie resource managera
        console.log('resouces loaded');
        this.objects = menu();          // prva spustena scena
        this.startLoop();               // spustenie prvej slucky
    }

    startLoop() {
        this.time = Date.now();     // nastavime cas
        this.step();                // zavolame step
    }

    step() {

        const now = Date.now();     // definicia casu
        const dt = (now - this.time) / 100;     // konstanta pre pohyb v case
        this.time = now;

        this.move(dt);  // pohyb vsetkych objektov v case
        this.render();  // vykreslenie vsetkych objektov

        requestAnimationFrame(() => this.step());   // spustenie nekonecnej slucky
    }

    move(dt) {
        this.objects.forEach((object) => {      // pohni s kazdym objektom 
            object.move(dt);
        });
    }

    clearCtx() {            // definicia cistenia canvasu
        this.ctx.fillStyle = "white";
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

    render() {
        this.clearCtx();    // vycisti canvas

        this.objects.forEach((object) => {  // vykresli kazdy objekt
            object.draw(this.ctx);
        });
    }
}