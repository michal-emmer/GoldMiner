class Images {
    // Initialization
    constructor(ImageName,x, y, width, height) {
        this.canvas = document.getElementById("canvas");
        this.image = resourceManager.getImageSource(ImageName);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.physical = false;
    }

    // Movement logic
    move(dt) {

    }

    // Render self
    draw(ctx) {
        ctx.save()
        ctx.translate(this.x, this.y)
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
        ctx.restore()
    }
}