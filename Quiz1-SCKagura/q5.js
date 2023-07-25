const q5 = (mafias, fights) => {
  let powers = mafias.map((std) => std.power); //[5,30,60,42,70]
  let loop = fights.length;
  let result = {};
  for (let i = 0; i < loop; i = i + 2) {
    if (powers[fights[i] - 1] > powers[fights[i + 1] - 1]) {
      powers[fights[i] - 1] += powers[fights[i + 1] - 1];
    } else if (powers[fights[i] - 1] < powers[fights[i + 1] - 1]) {
      powers[fights[i + 1] - 1] += powers[fights[i] - 1];
    }
  }
  let most = -999999999999999999999999999999999999;
  for (let i = 0; i < powers.length; i++) {
    if (powers[i] >= most) {
      most = powers[i];
      result.id = i + 1;
    }
  }
  result.power = most;
  // if (most < 0) {
  //   result = {};
  //   result.power = 0;
  //   return result;
  // }
  return result;
};

// //Test case
const mafias = [
  { id: 1, power: -50 },
  { id: 2, power: -100 },
  { id: 3, power: 20 },
];
const fights = [1, 2, 3, 1];
console.log(q5(mafias, fights));

module.exports = q5;
