function processNumbers(numbers) {
    const numbs = numbers.filter(n => n%2==0);
    const squareNumbs = numbs.map(num => num*num);
    return squareNumbs;
}

// 테스트
console.log(processNumbers([1, 2, 3, 4, 5, 6]));

