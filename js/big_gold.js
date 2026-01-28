class Big_gold {
    // Initialization
    constructor(x, y) {
        this.physical = true;
        this.canvas = document.getElementById("canvas");
        this.image = resourceManager.getImageSource("big_gold");
        this.x = x;
        this.y = y;
        this.width = 100;
        this.height = 100;
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