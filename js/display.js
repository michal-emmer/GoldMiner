class Display {
    constructor(lvl, req_score) {
        this.canvas = document.getElementById("canvas");
        this.req_score = req_score;
        this.lvl = lvl;
        this.physical = false;
    }
    // Movement logic
    move(dt) {
    }
    draw(ctx) {
        ctx.save();
        ctx.font = "20pt Arial";
        ctx.fillStyle = "black";
        ctx.fillText("Level: " + this.lvl, 650, 90);
        ctx.fillText("Body: " + score, 30, 50);
        ctx.fillText("Cieľ: " + this.req_score, 30, 90);
        ctx.restore();
    }
}