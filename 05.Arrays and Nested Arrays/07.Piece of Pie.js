function solve(arr, a, b) {
    let indexStart = arr.indexOf(a);
    let indexEnd = arr.indexOf(b);
    let result = arr.slice(indexStart, indexEnd+1)
    // console.log(result);
    return result;
}

solve(['Pumpkin Pie',
    'Key Lime Pie',
    'Cherry Pie',
    'Lemon Meringue Pie',
    'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie'
);

