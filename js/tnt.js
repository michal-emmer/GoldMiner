class Tnt {
    // Initialization
    constructor(x, y) {
        this.canvas = document.getElementById("canvas");
        this.image = resourceManager.getImageSource("tnt");
        this.x = x;
        this.y = y;
        this.width = 65;
        this.height = 65;
        this.physical = true;
    }

    // Movement logic
    move(dt) {

    }

    // Render self
    draw(ctx) {
        ctx.save()
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
        ctx.restore()
    }
}