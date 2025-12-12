function calculuate(num1, num2, operator) {
    const operators = {
        "+": (a,b) => a+b,
        '-': (a,b) => a-b,
        '*': (a,b) => a*b,
        '/': (a,b) => a/b
    };

    if (operators[operator]) {
        const result = operators[operator](num1, num2);
        return result;
    } else {
        return "Error";
    }
    
}

console.log(calculuate(1,3,"+"));