const s="abaa";
const n=4;

const as = [...s].filter(char => char === "a").length;
const times = parseInt(n/s.length);
const remainder = n % s.length;

const totalAs = times * as + [...s.slice(0, remainder)].filter(c => c === "a").length
console.log(totalAs);