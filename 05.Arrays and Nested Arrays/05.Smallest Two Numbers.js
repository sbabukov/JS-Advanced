function solve(arr) {
    arr.sort((a, b) => a - b)
    let firstNum = arr[0];
    let secontNum = arr[1];

    console.log(firstNum, secontNum);
}

solve([30, 15, 50, 5]);