/* 1.3.7 Transition from Str to Int */

const fooStr = "-12345"

// 1. Use the library
const StrToInt = (str) => {
  return Number(str) ? Number(str) : NaN
}

// 2. Let's use the inbuilt function charCodeAt()

const newMethod = (str) => {
  let result = 0;
  const isNegative = str[0] === "-";
  const currentIdx = isNegative ? 1 : 0 ;

  for (let i=currentIdx;i<str.length;i++) {
    const digit = str.charCodeAt(i) - 48;
    if (digit<0 || digit>9) {
      return NaN;
    }
    result = 10 * result + digit
  }
  return isNegative ? -1*result : result
}

console.log(newMethod(fooStr));

/* 1.3.8 Resorting */

const foo = "3a, 1c, 5f, 7h, 2a, 4e, 6g";
const newFoo = foo.replace(/\s/g,"").split(",");
const sortedNewFoo = newFoo
  .map((word) => {return { word, digit:word[0], letter:word[1] }})
  .sort((a,b)=>{ return a.letter.localeCompare(b.letter)
  })
  .sort((a,b)=>{ 
    if (a.letter === b.letter) {
      return a.digit - b.digit}
    return 0
  })
  .map((obj)=>obj.word)
  .join(",")

console.log(sortedNewFoo);

/* 1.3.9 Stack Method */

//{{()}}
const stackStr = "{{(})}"
const validParentheses = (str) => {
  let stack = [];
  const initChars = ["(", "{", "["]
  for (let char of str) {
    if (initChars.includes(char)) {
      stack.push(char)
    } else {
      const lastChar = stack.pop(); // 마지막에 넣은 것을 pop 해봐.
      if (char === ")" && lastChar !== "(" || 
        char === "}" && lastChar !== "{" || 
        char === "]" && lastChar !== "[" )
      return false      
    }
  }
  return stack.length === 0
}

console.log(validParentheses(stackStr));

//  BOJ 9102 Silver 4 


const fooBar = (str) => {
  let stack = [];
  for (let char of str) {
    if (char === "(") {
      stack.push(char)
    } else {
      const lastChar = stack.pop();
      if (char === ")" && lastChar !== "(") return "NO"
    }
  }
  return stack.length === 0 ? "YES" : "NO"
}

// BOJ 10773 Silver 4

const fooCheck = (inputNums) => {
  let stack = [];
  for (let num of inputNums) {
    if (num === 0) {
      stack.pop();
    } else {
      stack.push(num)
    }
  }
  return stack.reduce((a,c)=>a+c,0);
}

// Neetcode Group Anagrams;

const checkAnagram = (str1, str2) => {
  return [...str1].sort().join("") === [...str2].sort().join("")
}

const groupAnagram = (strs) => {
  let result = [];
  
  }


/* Vim Command

Normal Mode : navigating 

hjkl : left, down, up, right

x : delete
dd : delete that line I am at 
u : same as ctrl+z : If mistake has happened, click ESC, and type u multiple times.
cw: change word (great for changing the variable name.)

Insert Mode : 

i : insert 
a : append
shift + a : append at the last line
o : make a new line

click ESC to end everything

If you want to save something, click :w !! 
*/