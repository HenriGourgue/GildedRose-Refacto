const { Item } = require("./Item");

class Concert extends Item {

    constructor(name, sellIn, quality){

        super(name, sellIn, quality);
    }

    updateQuality(){

        this.sellIn--;

        if(this.sellIn <= 0){
            this.quality = 0;
        } else {
            if(this.sellIn > 10){
                this.quality++;
            } else {
                if(this.sellIn <= 10 && this.sellIn > 5){
                    this.quality = this.quality + 2;
                } else {
                    this.quality = this.quality + 3;
                }
            }
        }

        if(this.quality > 50){
            this.quality = 50;
        }

        if(this.sellIn < 0){
            this.sellIn = 0;
        }
    }

}

module.exports = {
    Concert
}