/* Reversing the Order */

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

/* Eliminatring Repetitions */

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
