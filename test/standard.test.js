const { Standard } = require("../src/class/Standard");
const { Shop } = require("../src/class/Shop");

describe("Item standard", function() {

    const name = "+5 Dexterity Vest";
  
    it("Test création d'un Shop", function() {
  
      const shop = new Shop([new Standard(name, 2, 2)]);
      const results = shop.updateQuality();
  
      expect(results[0].name).toBe(name);
    });
  
    it("Test baisse de la valeur sellIn", function() {
  
      const shop = new Shop([new Standard(name, 4, 1)]);
      const results = shop.updateQuality();
  
      expect(results[0].sellIn).toBe(3);
    });
  
    it("Test baisse de la qualité classique", function() {
  
      const shop = new Shop([new Standard(name, 4, 9)]);
      const results = shop.updateQuality();
  
      expect(results[0].quality).toBe(8);
    });
  
    it("Test qualité jamais inférieure à 0", function() {
  
      const shop = new Shop([new Standard(name, 0, 0)]);
      const results = shop.updateQuality();
  
      expect(results[0].quality).toBe(0);
    });
  
    it("Test baisse de la qualité deux fois plus rapide (sellIn date = 0)", function() {
  
      const shop = new Shop([new Standard(name, 0, 4)]);
      const results = shop.updateQuality();
  
      expect(results[0].quality).toBe(2);
    });
});