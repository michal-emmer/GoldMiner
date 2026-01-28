class Timer {
    constructor(level, req_score) {
        this.canvas = document.getElementById("canvas");
        // MODEL
        this.x = 650;
        this.y = 50;
        this.timer = 0;
        this.level = level;
        this.req_score = req_score;
        var countDownDate = 45;
        this.physical = false;
        document.getElementById("timer").innerHTML = countDownDate;
        var now = 0;
        // Kazdu sekundu aktualizujeme casovac
        var x = setInterval(function () {
            if (end == 1) {
                clearInterval(x);       // ak sme sa dostali mimo levela, tak ho vynulujeme
            };
            var distance = countDownDate - 1 - now;
            now++;
            document.getElementById("timer").innerHTML = distance;
            // Ak casomiera vyprsi, vynuluj casomieru a prepni na dalsi level 
            if (distance < 0) {
                clearInterval(x);
                document.getElementById("timer").innerHTML = distance + 1;
                level++;
                next_level(level, req_score);
            };
        }, 1000);
    }
    move(dt) {
        //
    }
    draw(ctx) {
        ctx.save();
        ctx.font = "20pt Arial";
        ctx.fillStyle = "black";
        ctx.fillText("Čas: " + document.getElementById("timer").innerHTML, this.x, this.y);
        ctx.fillText("Level: " + this.level, 650, 90);
        ctx.fillText("Body: " + score, 30, 50);
        ctx.fillText("Cieľ: " + this.req_score, 30, 90);
        ctx.restore();
    }
}
function next_level(level, req_score) {     // funkcia, ktora vola dalsie levely, ak sme dosiahli pozadovane skore, inak zavola gameover
    //console.log(score,req_score);
    if (level == 2) {
        if (score >= req_score) {
            game.level_sound.play();
            game.objects = level2();
        }
        else {
            if (game.game_music.play_started) {
                game.menu_music.play();
            }
            game.game_music.sound.volume = 0;
            game.objects = gameover();
        }
    }
    if (level == 3) {
        if (score >= req_score) {
            game.level_sound.play();
            game.objects = level3();
        }
        else {
            if (game.game_music.play_started) {
                game.menu_music.play();
            }
            game.game_music.sound.volume = 0;
            game.objects = gameover();
        }
    }
    if (level == 4) {
        if (game.game_music.play_started) {
            game.menu_music.play();
        }
        game.game_music.sound.volume = 0;
        game.objects = gameover();
    }
}