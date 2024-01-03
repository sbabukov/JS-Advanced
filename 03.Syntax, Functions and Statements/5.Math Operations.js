function solve(num1, num2, operator) {
    let result;
    switch (operator) {
        case '+': result = num1 + num2;
            break;

        case '-': result = num1 - num2;
            break;

        case '*': result = num1 * num2;
            break;

        case '/': result = num1 / num2;
            break;

        case '%': result = num1 % num2;
            break;

        case '**': result = num1 ** num2;
            break;

            
    }
    console.log(result);
}



// function solve(num1, num2, operant) {
//     switch (operant) {
//         case '+':

//         console.log (num1 + num2);
            
//             break;
            
//         case '-':
//             console.log (num1 - num2);

//             break;

//         case '*':
//         console.log (num1 * num2);
            
//             break;
        
//         case '/':
//         console.log (num1 / num2);
            
//             break;
        
//         case '%':
//         console.log (num1 % num2);
            
//             break;

//         case '**':
//         console.log (num1 ** num2);
            
//             break;
    
//         default:
//             break;
    
//     }
// }

solve(3, 4, '*')