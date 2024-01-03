// function solve(input) {
//     let inputString = input.toString();
//     for (let i = 0; i < inputString.length; i++) {
//         // if (inputString[0] !== inputString[i]) {

//         // }

//         console.log(inputString[i]);
//     }

//     // console.log(typeof(inputString));
// }

function solve(input) {
    let inputNumber = input.toString();
    let isSame = true;
    let sumOfDigits = 0;
    let digitToCompare = inputNumber[0];
    let numberL = inputNumber.length;

    for (let index = 0; index < numberL; index++) {
        let currentDigit = Number(inputNumber[index]);
            sumOfDigits += currentDigit;
            if (digitToCompare !== currentDigit.toString()) {
                isSame = false;
            }
    }
    console.log(isSame);
    console.log(sumOfDigits);
}

solve(1234)