function solve(arr) {
    arr.sort((a, b) => a - b);
    let half = Math.floor(arr.length/2);
    let result = arr.slice(half)
    return result;
}

solve([3, 19, 14, 7, 2, 19, 6]);