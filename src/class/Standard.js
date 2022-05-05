const { Item } = require("./Item");

class Standard extends Item {

    constructor(name, sellIn, quality){

        super(name, sellIn, quality);
    }

}

module.exports = {
    Standard
}