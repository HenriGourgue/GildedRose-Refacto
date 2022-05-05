const {Shop, Item} = require("../src/gilded_rose");

describe("Item standard", function() {

  const name = "+5 Dexterity Vest";

  it("Test création d'un Shop", function() {

    const shop = new Shop([new Item(name, 2, 2)]);
    const results = shop.updateQuality();

    expect(results[0].name).toBe(name);
  });

  it("Test baisse de la valeur sellIn", function() {

    const shop = new Shop([new Item(name, 4, 1)]);
    const results = shop.updateQuality();

    expect(results[0].sellIn).toBe(3);
  });

  it("Test baisse de la qualité classique", function() {

    const shop = new Shop([new Item(name, 4, 9)]);
    const results = shop.updateQuality();

    expect(results[0].quality).toBe(8);
  });

  it("Test qualité jamais inférieure à 0", function() {

    const shop = new Shop([new Item(name, 0, 0)]);
    const results = shop.updateQuality();

    expect(results[0].quality).toBe(0);
  });

  it("Test baisse de la qualité deux fois plus rapide (sellIn date = 0)", function() {

    const shop = new Shop([new Item(name, 0, 4)]);
    const results = shop.updateQuality();

    expect(results[0].quality).toBe(2);
  });
});

describe("Fromage (Aged Brie)", () => {

  it("Test plafond de qualité à 50", function() {

    const shop = new Shop([new Item("Aged Brie", 2, 50)]);
    const results = shop.updateQuality();

    expect(results[0].quality).toBe(50);
  });

  it("Test le fromage prend de la qualité", function() {

    const shop = new Shop([new Item("Aged Brie", 2, 5)]);
    const results = shop.updateQuality();

    expect(results[0].quality).toBe(6);
  });
});
