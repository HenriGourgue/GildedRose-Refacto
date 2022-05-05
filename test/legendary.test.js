const { Shop } = require("../src/class/Shop");
const { Legendary } = require("../src/class/Legendary");

describe("Sulfuras", () => {

    const name = "Sulfuras, Hand of Ragnaros";
  
    it("Test vérification que la qualité est toujours à 80 (item légendaire)", function() {
  
      const shop = new Shop([new Legendary(name, 5, 80)]);
      const results = shop.updateQuality();
  
      expect(results[0].quality).toBe(80);
    });
});