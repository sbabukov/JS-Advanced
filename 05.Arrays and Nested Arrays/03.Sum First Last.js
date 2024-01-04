function solve(array) {
    let firstElem = Number(array.shift());
    let LastElem = Number(array.pop());
    let sum = firstElem + LastElem;
    
    console.log(sum);
}

solve(['5', '10']);