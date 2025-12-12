function makeCounter() {
    let count = 0;

    return function() {
        count+=1;
        return count;
    };
}
//function closure

const counter1 = makeCounter();

console.log(counter1());
console.log(counter1());

const counter2 = makeCounter();
console.log(counter2());