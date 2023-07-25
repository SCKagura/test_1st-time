const q2 = (m, n) => {
  let arr = [];
  let sum = 0;
  for (let i = m; i <= n; i++) {
    if (i % 2 === 1) {
      arr.push(i);
    }
  }
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
};

//test cases
console.log(q2(1, 5));
console.log(q2(10, 20));

module.exports = q2;
