const { Item } = require("./Item");

class Brie extends Item {

    constructor(name, sellIn, quality){

        super(name, sellIn, quality);
    }

}

module.exports = {
    Brie
}