class Hook {
    // Initialization
    constructor(x, y) {
        this.canvas = document.getElementById("canvas");
        this.image = resourceManager.getImageSource('hook');
        this.rotation = 0;
        this.direction = 1;
        this.rotation_angle = 0.75 * Math.PI / 180;
        this.x = x;
        this.y = y;
        this.ox = x;
        this.oy = y;
        this.width = 70;
        this.height = 100;
        this.pomoc = 0;
        this.dx = this.x + (this.width / 2);
        this.dy = 90;
        this.physical = true;
    }
    checkCollision(objects) {           // detekcia kolízií
        for (var i in objects) {        // vytvorenie pola objektov
            var obj = objects[i];
            // Ak objekt nie je definovaný ako fyzický, tak vyskakujeme z funkcie
            if (obj == this || !obj.physical) continue;
            var test =
                this.ox >= obj.x + obj.width / 2 ||             // hitbox objektov je trochu menší, ako ich textúra
                this.ox + this.width / 2 <= obj.x ||            // v prípade, že je viac objektov pri sebe, tak aby sme nezasiahli ten, ktorý bol iba okrajovo dotknutý
                this.oy >= obj.y + obj.height / 2 ||
                this.oy + this.height / 2 <= obj.y;
            if (!test) {                                        // ak nastala kolízia
                var str1 = obj.constructor.name;                // uložíme si názov objektu
                objects.splice(i, 1);                           // zmažeme objekt z pola
                // rozpoznávanie objektov pomocou string compare, aby sme vedeli, koľko bodov je potrebné prideliť a aký zvuk treba prehrať
                if (str1.localeCompare("Small_gold") == 0) {
                    game.gold_sound.play();
                    score += 40;
                }
                else if (str1.localeCompare("Big_gold") == 0) {
                    game.gold_sound.play();
                    score += 400;
                }
                else if (str1.localeCompare("Stone") == 0) {
                    game.stone_sound.play();
                    score -= 50;
                }
                else if (str1.localeCompare("Diamond") == 0) {
                    game.diamond_sound.play();
                    score += 650;
                }
                else if (str1.localeCompare("Tnt") == 0) {
                    game.tnt_sound.play();
                    if (game.menu_music.play_started = true) {
                        game.menu_music.play();
                    }
                    if (game.game_music.play_started) {
                        game.menu_music.play();
                    }
                    game.game_music.sound.volume = 0;
                    game.objects = gameover();         // koniec hry
                }
                //console.log(obj.constructor.name, obj.x, obj.y, obj.width, obj.height)
                return obj;
            }
        }
        return false;
    }
    move(dt) {                      // rotácia háku
        if (this.pomoc == 0) {
            //console.log("uhol: " + (this.rotation * 57.2957795));
            this.rotation += (dt) * this.rotation_angle * 8;
            if (this.rotation > 75 * Math.PI / 180 || this.rotation < -75 * Math.PI / 180) {
                this.rotation_angle = -this.rotation_angle;
                this.rotation += (dt) * this.rotation_angle * 8;
            }
        }
        if (game.keys[40] || game.keys[83]) {       // ak stlacime "s" alebo šípku dole, tak pomocnú premennú nastavíme na 1 a hák je pripravený vystreliť
            game.hook_sound.play();
            this.pomoc = 1;
        }
        if (this.pomoc == 1) {                      // proces vystrelenia háku
            this.y += (dt) * 20 * this.direction;
            var distance = this.y - 80;
            this.ox = distance * Math.sin(-this.rotation) + 370;            // reálna súradnica x, s ktorou robíme kolízie
            this.oy = distance * Math.cos(this.rotation) + 80;              // reálna súradnica y, s ktorou robíme kolízie
            //console.log("ox: " + ox, "oy: " + oy);
            if (this.checkCollision(game.objects) || this.y > 550) {        // zmena smeru háku ak sme zachytili objekt alebo ak hák presiahol svoju maximálnu dĺžku
                this.direction = -this.direction;
                this.y += (dt) * 20 * this.direction;
            }
            if (this.x == 370 && this.y < 80) {                             // akonáhle sa hák vráti do pôvodnej polohy, pokračujeme opäť s rotáciou háku
                this.x = 370;
                this.y = 80;
                this.direction = -this.direction;
                this.pomoc = 0;
            }
        }
    }
    draw(ctx) {
        ctx.save();
        ctx.translate(this.dx, this.dy);
        ctx.rotate(this.rotation);
        ctx.translate(-this.dx, -this.dy);
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        ctx.restore();
    }
}