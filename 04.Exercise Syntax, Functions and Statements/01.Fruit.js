function solve(fruit, weight, price) {
    
    let weightKilo = weight/1000;

    let money =(weightKilo*price);

    console.log(`I need $${money.toFixed(2)} to buy ${weightKilo.toFixed(2)} kilograms ${fruit}.`);
}

solve('orange', 2500, 1.80)