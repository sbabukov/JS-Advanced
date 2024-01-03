function solve(input) {
    let result = typeof(input);
    if (result === 'number') {
        result = Math.PI * input**2;
        console.log(result.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${result}.`);
    }
 
}

solve('5')