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