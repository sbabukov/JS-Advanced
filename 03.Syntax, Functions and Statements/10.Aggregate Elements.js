function solve(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    console.log(sum);

    let inverseValue = 0;
    for (let i = 0; i < array.length; i++) {
        inverseValue += 1/array[i];
    }
    console.log(inverseValue);

    let concatenat = '';
    for (let i = 0; i < array.length; i++) {
        concatenat += array[i];
    }
    console.log(concatenat);
}

solve([2, 4, 8, 16]);