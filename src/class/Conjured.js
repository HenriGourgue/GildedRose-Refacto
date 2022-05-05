const { Item } = require("./Item");

class Conjured extends Item {

    constructor(name, sellIn, quality){

        super(name, sellIn, quality);
    }

}

module.exports = {
    Conjured
}