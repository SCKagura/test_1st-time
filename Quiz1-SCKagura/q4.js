const q4 = (hero, shopItems) => {
  let cost = shopItems.map((std) => std.price); //[10,5,50]  ,[70,40,20]
  let Itemname = shopItems.map((std) => std.item);
  let result = {};
  result.items = hero.items;
  let money = hero.gold; //100
  for (let i = 0; i < cost.length; i++) {
    if (money > cost[i]) {
      money = money - cost[i];
      result.items.push(Itemname[i]);
    }
    if (money < cost[i]) break;
  }
  result.gold = money;
  return result;
};

const hero1 = {
  items: ["sword", "potion"],
  gold: 100,
};

const hero2 = {
  items: ["knife"],
  gold: 100,
};

const shopItems1 = [
  {
    item: "armor",
    price: 10,
  },
  {
    item: "boot",
    price: 5,
  },
  {
    item: "gun",
    price: 50,
  },
];

const shopItems2 = [
  {
    item: "helmet",
    price: 70,
  },
  {
    item: "boot",
    price: 40,
  },
  {
    item: "magic wand",
    price: 20,
  },
];

console.log(q4(hero1, shopItems1));
console.log(q4(hero2, shopItems2));

module.exports = q4;
