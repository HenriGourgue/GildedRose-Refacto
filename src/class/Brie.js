const { Item } = require("./Item");

class Brie extends Item {

    constructor(name, sellIn, quality){

        super(name, sellIn, quality);
    }

    updateQuality(){

        this.sellIn--;

        this.quality++;

        if(this.quality > 50){
            this.quality = 50;
        }

        if(this.sellIn < 0){
            this.sellIn = 0;
        }
    }

}

module.exports = {
    Brie
}