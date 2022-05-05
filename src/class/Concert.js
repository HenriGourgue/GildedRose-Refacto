const { Item } = require("./Item");

class Concert extends Item {

    constructor(name, sellIn, quality){

        super(name, sellIn, quality);
    }

}

module.exports = {
    Concert
}