const { Item } = require("./Item");

class Conjured extends Item {

    constructor(name, sellIn, quality){

        super(name, sellIn, quality);
    }

    updateQuality(){

        this.sellIn--;

        if(this.sellIn <= 0){
            this.quality = this.quality - 4;
        } else {
            this.quality = this.quality - 2;
        }

        if(this.quality < 0){
            this.quality = 0;
        }

        if(this.sellIn < 0){
            this.sellIn = 0;
        }
    }

}

module.exports = {
    Conjured
}