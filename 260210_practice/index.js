/* 1. Reversing the Order */

// Given a string STR, reverse its order.
// The first method of using SPREAD operator, in-built function reverse method, and join the string.

const firstReverseMap = (str) => {
  return [...str].reverse().join("")
} // O(n) : spread-operator, reverse method is known to be O(n) as weel as join method.

const firstStr = "hello";
console.log(firstReverseMap(firstStr))

// The second method of using for-loop

const secondReverseMap = (str) => {
  let rev = "";
  for (let i = str.length-1 ; i>=0 ; i--) {
    rev += str[i]
  }
  return rev
} // There is only one loop, so O(n)

console.log(secondReverseMap(firstStr));

/* 2. Eliminatring Repetitions */

// Given a string STR, get rid of repeated letters.

const secondStr = "abbcccdddeeefff";

// First solution uses set method to get rid of duplicate element, spread the set into array, and make them into string by concatenation.

const firstRmvDup = (str) => {
  const setStr = new Set(str);
  const newArry = [...setStr];
  return newArry.join("");
}

console.log(firstRmvDup(secondStr));

// Second solution uses HashMap
// So, you make a HashMap first, then start to put the elements if charMap has no such key. The value is boolean. (In fact, it can be anything.)

const secondRmvDup = (str) => {
  let rmvStr = "";
  let charMap = new Map();
  for (let i=0; i<str.length; i++) {
    let char = str[i];
    if (!charMap.has(char)) {
      charMap.set(char,true);
      rmvStr += char;
    }
  }
  return rmvStr;
}

console.log(secondRmvDup(secondStr));

/* 3. Compressing String */

const compStr = (str) => {
  let compStr = ""
  let counter = 1;
  for (let i=0; i<str.length; i++) {
    if (str[i] === str[i+1]) {
      counter+=1;
    } else {
      compStr += `${str[i]}${counter}`
      counter = 1
    }
  }
  return compStr.length > str.length ? str : compStr;
}

console.log(compStr("aabccccccaaa"));

/* 4. Finding the most common word that appears in the given string. */

const foo = (str) => {
  const newFoo = str.toLowerCase().split(/\W+/).filter(Boolean); // \w = [A-Za-z0-9_] and \W = [^A-Za-z0-9_]
  const fooMap = new Map();
  newFoo.forEach(foo => {
    fooMap.set(foo, (fooMap.get(foo)||0)+1)
  })
  const fooMapArray = [...fooMap];
  const sortedFooMapArray = fooMapArray.sort((a,b)=>b[1]-a[1]); // Decreasing order of key-vals;
  return sortedFooMapArray[0][0];
}

const fourthStr = "Hello World, this is a foo world. Bye!";
console.log(foo(fourthStr));

/* 5. Check whether it is palindrome */
// 1st method 
const palinFoo = (str) => {
  const revStr = [...str].reverse().join("");
  return str === revStr;
}
console.log(palinFoo("Hello"));

// 2nd method
const stupidPalinFoo = (str) => {
  const mid = Math.floor(str.length / 2);
  for (let i=0;i<mid; i++) {
    if (str[i] !==str[str.length-1-i]) {
      return false
    } 
  }
  return true;
}

console.log(stupidPalinFoo("abba"));
