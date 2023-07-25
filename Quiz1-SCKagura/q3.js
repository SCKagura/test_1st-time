const q3 = (runners) => {
  let Runner = runners.map((std) => std.time); //[45,55,120]
  let Averagetime = 0;
  for (let i = 0; i < Runner.length; i++) {
    Averagetime += Runner[i];
  } //220
  Averagetime = Averagetime / Runner.length; //73.3333
  let RunnerFilter = runners.filter((std) => std.time <= Averagetime);
  return RunnerFilter;
};

//test cases
const input1 = [
  { name: "Bobby", time: 45 },
  { name: "Robert", time: 55 },
  { name: "Wilson", time: 120 },
];

console.log(q3(input1));

module.exports = q3;
