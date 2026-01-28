class Text {
    constructor(font, text, x, y) {
        this.canvas = document.getElementById("canvas");
        this.font = font;
        this.text = text;
        this.color = "black";
        this.x = x;
        this.y = y;
    }
    // Movement logic
    move(dt) {
    }
    draw(ctx) {
        ctx.save();
        ctx.font = this.font;
        ctx.fillStyle = this.color;
        ctx.fillText(this.text, this.x, this.y);
        ctx.restore();
    }
}