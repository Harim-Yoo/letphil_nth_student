/* Spread/Rest Operator */

// 1st Spread Operator : From String/Set to Array 

const foo = "FOO";
console.log([...foo]);
const bar = new Set("BAR");
console.log(bar);
console.log([...bar]);

// 2nd Spread Operator : Shallow Copy, but appending more values.

const fooBar = { first_name:"Foo", second_name:"bar" };
console.log({...fooBar, third_name:"What"});
console.log({...fooBar, first_name:"FooFoo"});

// 1st Rest Operator : gathering indefinite amount of arguments.
const fooSum = (...args) => {
  console.log(args); // Triple dots turn args into an array.
  console.log(Array.isArray(args));
  return args.reduce((acc,cur)=>acc+cur,0) // ...args turn into an array with all arguments as array input.
}

console.log(fooSum(1,2,3,4,5));

// 2nd Rest Operator : Destructoring Objects.

const {first_name, ...rest} = fooBar;
console.log(first_name); // It actually gives back the value for that key.
console.log(rest); // It gives back all the remaining object in key-value pair.