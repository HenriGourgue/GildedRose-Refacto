const { Shop } = require("../src/class/Shop");
const { Brie } = require("../src/class/Brie");

describe("Fromage (Aged Brie)", () => {

    const name = "Aged Brie";
  
    it("Test plafond de qualité à 50", function() {
  
      const shop = new Shop([new Brie(name, 2, 50)]);
      const results = shop.updateQuality();
  
      expect(results[0].quality).toBe(50);
    });
  
    it("Test le fromage prend de la qualité", function() {
  
      const shop = new Shop([new Brie(name, 2, 5)]);
      const results = shop.updateQuality();
  
      expect(results[0].quality).toBe(6);
    });
  });