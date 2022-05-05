const { Shop } = require("../src/class/Shop");
const { Concert } = require("../src/class/Concert");

describe("Backstage passes to a TAFKAL80ETC", () => {

    const name = "Backstage passes to a TAFKAL80ETC concert";
  
    it("Test vérification si moins de 5 jours de sellIn, la qualité augmente de 3", function() {
  
      const shop = new Shop([new Concert(name, 2, 6)]);
      const results = shop.updateQuality();
  
      expect(results[0].quality).toBe(9);
    });
  
    it("Test si le sellIn est à 0 (concert terminé), la qualité tombe à 0", function() {
  
      const shop = new Shop([new Concert(name, 0, 5)]);
      const results = shop.updateQuality();
  
      expect(results[0].quality).toBe(0);
    });
  
    it("Test vérification si moins de 10 jours, la qualité augmente de 2", function() {
  
      const shop = new Shop([new Concert(name, 8, 11)]);
      const results = shop.updateQuality();
  
      expect(results[0].quality).toBe(13);
    });
  
    it("Test vérification si plus de 10 jours de sellIn, la qualité augmente de 1", function() {
  
      const shop = new Shop([new Concert(name, 11, 11)]);
      const results = shop.updateQuality();
  
      expect(results[0].quality).toBe(12);
    });
  });