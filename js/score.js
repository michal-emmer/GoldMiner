class Score {
    constructor() {
        this.canvas = document.getElementById("canvas");
        this.color = "black";
        this.max_score = maxscore_calc();
    }

    // Movement logic
    move(dt) {
    }
    draw(ctx) {
        ctx.save();
        ctx.font = '30pt Arial';
        ctx.fillStyle = this.color;
        ctx.fillText('Tvoje skóre: ' + score, 260, 170);
        ctx.fillText('Max skóre: ' + this.max_score, 260, 220);
        ctx.restore();
    }
}
function maxscore_calc() {          // funkcia na vypocet maximalneho dosiahnuteho skore
    if (max_score < score) {
        max_score = score;
    }
    return max_score;
}