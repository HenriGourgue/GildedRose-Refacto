const { Item } = require("./Item");

class Legendary extends Item {

    constructor(name, sellIn, quality){

        super(name, sellIn, 80);
    }

    updateQuality(){

        this.quality = 80;
    }

}

module.exports = {
    Legendary
}