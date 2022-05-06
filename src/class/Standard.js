const { Item } = require("./Item");

class Standard extends Item {

    constructor(name, sellIn, quality){

        super(name, sellIn, quality);
    }

    updateQuality(){

        this.sellIn--;

        if(this.sellIn < 0){
            if(this.quality - 2 < 0){
                this.quality = 0;
            } else {
                this.quality = this.quality - 2;
            }
        } else {
            if(this.quality - 1 < 0){
                this.quality = 0;
            } else {
                this.quality --;
            }
        }
    }

}

module.exports = {
    Standard
}