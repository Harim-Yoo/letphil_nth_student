/* 6. Anagram Practice */

// Anagram is a rearrangement of a given word to produce another word. For instance, "listen" can be rearranged into "silent"

const anagramCheck = (str1,str2) => {
  // Check whether they have the same length;
  if (str1.length !== str2.length) {
    return false
  }

  // Check whether their set sorted values are equal.
  const sortedStr = (str) => {
    return [...str].sort().join("");
  }

  return sortedStr(str1) === sortedStr(str2) ? true : false
}

const A = "mouse";
const B = "moose";
console.log(anagramCheck(A,B));

// Refactor using HashMap
// 1. Put str1 into HashMap. 
// 2. Check str2 with the HashMap created. 

const anagramHashCheck = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false
  }
  
  const hashMap = new Map();

  for (const char of str1)
    if (hashMap.has(char)) {
      hashMap.set(char,hashMap.get(char)+1)
    } else {
      hashMap.set(char, 1)
    }
  
  for (const char of str2) {
    if (hashMap.has(char) && hashMap.get(char)>0) {
      hashMap.set(char,hashMap.get(char)-1)
    } else { 
      return false
    }
  }
  return true;
}

console.log(anagramHashCheck(A,B))

/* 7. Turning Str into Integer */

const foo = "-327"

// Using Number function. This is O(n).
const strToInt = (str) => {
  return Number(str)
}




