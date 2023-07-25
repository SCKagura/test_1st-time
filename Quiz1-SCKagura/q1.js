const q1 = (hero) => {
  let HeroDetails = {};
  HeroDetails.name = hero.name;
  HeroDetails.hp = hero.hp;
  if (HeroDetails.hp <= 90) {
    HeroDetails.hp = hero.hp + 10;
  } else {
    HeroDetails.hp = 100;
  }
  if (HeroDetails.hp % 8 === 0) {
    HeroDetails.luckyHp = true;
  } else {
    HeroDetails.luckyHp = false;
  }

  return HeroDetails;
};

//test cases
const input1 = { name: "Batman", hp: 78 };
const input2 = { name: "Superman", hp: 95 };

console.log(q1(input1));
console.log(q1(input2));

module.exports = q1;
