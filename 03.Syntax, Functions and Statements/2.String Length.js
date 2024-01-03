function solve(firstWord, secontWord, thirdWord) {
    let first = firstWord.length;
    let second = secontWord.length;
    let third = thirdWord.length;
    let sum = first + second + third;
    let average = Math.floor(sum/3);
    console.log(sum);
    console.log(average);
};

solve('chocolate', 'ice cream', 'cake');