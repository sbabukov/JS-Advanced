function solve(a, b) {
   
    for (let i = b; i >= 0; i--) {
        
        if (a%i==0 && b%i==0) {
            console.log(i);
            return
        }
        
    }
}

solve(18, 5)