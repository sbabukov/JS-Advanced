function solve(num, a1, a2, a3, a4, a5) {
    let arr = [num, a1, a2, a3, a4, a5];
    let number = Number(num);
    for (const element of arr) {
        switch (element) {
            case 'chop':
                number = number / 2;
                console.log(number);

                break;

            case 'dice':
                number = Math.sqrt(number);
                console.log(number);

                break;

            case 'spice':
                number = number + 1;
                console.log(number);

                break;

            case 'bake':
                number = number * 3;
                console.log(number);

                break;

            case 'fillet':
                number = number * 0.8;
                console.log(number);

                break;

            default:
                break;
        }
    }
};

solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');