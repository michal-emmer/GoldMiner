class Stone {
    // Initialization
    constructor(x, y) {
        this.physical = true;
        this.canvas = document.getElementById("canvas");
        this.image = resourceManager.getImageSource("stone");
        this.x = x;
        this.y = y;
        this.width = 70;
        this.height = 50;
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