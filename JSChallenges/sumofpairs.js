const numbers = [1, 4, 8, 7, 3, 15];
const s = 5;

let sum_pairs = function(numbers, s) {
    let map = {},
        pair, pairMaxIndex = numbers.length- 1;

    for (var i = 0; i <= pairMaxIndex; i++) {
        let a = numbers[i];
        let b = s - a;
        let j = map[b];
        if (j !== undefined && i <= pairMaxIndex && j <= pairMaxIndex) {
            pairMaxIndex = i > j ? i : j;
            pair = i < j ? [a, b] : [b, a];
        }
        let tmp = map[a];
        if (tmp === undefined || i < tmp) {
            map[a] = i;
        }
    }
    return pair;
};

console.log(sum_pairs(numbers,s));