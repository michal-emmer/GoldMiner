const IMAGES = [            // tu su ulozene vsetky obrazky, ktore potom staci zavolat prednastavenym menom
    { name: 'hnede_pozadie', src: "images/land_background.jpg" },
    { name: 'modre_pozadie', src: "images/cloud_background.png" },
    { name: 'zlate_pozadie', src: "images/gold_background.jpg" },
    { name: 'miner_menu', src: "images/miner_menu.png" },
    { name: 'play', src: "images/playbutton.png" },
    { name: 'playagain', src: "images/playagainbutton.png" },
    { name: 'instructions', src: "images/navodbutton.png" },
    { name: 'instructionspic', src: "images/instructions.png" },
    { name: 'back_instr', src: "images/back.png" },
    { name: 'back', src: "images/back.png" },
    { name: 'back_to_menu', src: "images/back_to_menu.png" },
    { name: 'exit', src: "images/exit.png" },
    { name: 'minergameover', src: "images/miner_gameover.png" },
    { name: 'miner_cart', src: "images/miner_cart.png" },
    { name: 'diamond', src: "images/diamond.png" },
    { name: 'small_gold', src: "images/small_gold2.0.png" },
    { name: 'big_gold', src: "images/big_gold2.0.png" },
    { name: 'stone', src: "images/stone.png" },
    { name: 'hook', src: "images/hook2.png" },
    { name: 'sound_on', src: "images/sound_on.png" },
    { name: 'tnt', src: "images/tnt.png" },
];
class ResourceManager {
    loadedImages = new Map();

    async init() {
        await this.loadImages();
    }
    async loadImages() {
        await Promise.all(
            IMAGES.map(image => this.loadImage(image)),
        )
    }
    async loadImage(imgResource) {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = imgResource.src;
            img.onload = () => {
                this.loadedImages.set(imgResource.name, img);
                resolve(img);
            }
            img.onerror = (err) => {
                reject(err);
            }
        });
    }
    getImageSource(imageName) {
        const image = this.loadedImages.get(imageName);
        if (image == null) {
            throw new Error(`Image '${imageName}' not found`);
        }
        return image;
    }
}