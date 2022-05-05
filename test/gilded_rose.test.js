const { Shop } = require("../src/class/Shop");
const { Item } = require("../src/class/Item");

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
