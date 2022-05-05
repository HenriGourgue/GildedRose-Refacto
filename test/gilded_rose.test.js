const { Shop } = require("../src/class/Shop");
const { Item } = require("../src/class/Item");

describe("Backstage passes to a TAFKAL80ETC", () => {

  const name = "Backstage passes to a TAFKAL80ETC concert";

  it("Test vérification si moins de 5 jours de sellIn, la qualité augmente de 3", function() {

    const shop = new Shop([new Item(name, 2, 6)]);
    const results = shop.updateQuality();

    expect(results[0].quality).toBe(9);
  });

  it("Test si le sellIn est à 0 (concert terminé), la qualité tombe à 0", function() {

    const shop = new Shop([new Item(name, 0, 5)]);
    const results = shop.updateQuality();

    expect(results[0].quality).toBe(0);
  });

  it("Test vérification si moins de 10 jours, la qualité augmente de 2", function() {

    const shop = new Shop([new Item(name, 8, 11)]);
    const results = shop.updateQuality();

    expect(results[0].quality).toBe(13);
  });

  it("Test vérification si plus de 10 jours de sellIn, la qualité augmente de 1", function() {

    const shop = new Shop([new Item(name, 11, 11)]);
    const results = shop.updateQuality();

    expect(results[0].quality).toBe(12);
  });
});

//Tests pour les items conjurés (pas encore géré dans le code)
describe("Cursed Dark Wizard's Hand", () => {

  const name = "Cursed Dark Wizard's Hand";

  it("Test vérification que la qualité descend deux fois plus vite si sellIn est à 0", function () {

    const shop = new Shop([new Item(name, 0, 5)]);
    const results = shop.updateQuality();

    expect(results[0].quality).toBe(1);
  });

  it("Test vérification que la qualité descend deux fois plus vite qu'un item standard", function () {

    const shop = new Shop([new Item(name, 10, 12)])
    const results = shop.updateQuality();

    expect(results[0].quality).toBe(10);
  });

  it("Test vérification que la qualité ne descend pas sous 0", function () {

    const shop = new Shop([new Item(name, 0, 0)]);
    const results = shop.updateQuality();

    expect(results[0].quality).toBe(0);
  })
});
