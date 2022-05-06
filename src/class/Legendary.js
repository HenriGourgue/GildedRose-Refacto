const { Item } = require("./Item");

class Legendary extends Item {

    constructor(name, sellIn, quality){

        super(name, sellIn, quality);
    }

    updateQuality(){

        this.quality = 80;
    }

}

module.exports = {
    Legendary
}