const fs = require('fs');

const path = "C:/Users/james/OneDrive/바탕 화면/감사교회/카이퍼/vol1/chap7/카이퍼_Vol1_chap7_XXIV.txt"
let text = "";
try {
  const data = fs.readFileSync(path,"utf8")
  text = data;
} catch (e) {
  throw e
}

const findWords = (str) => {
  const words = str.toLowerCase().split(/\W+/);
  const wordMap = new Map();
  words.forEach(word => {
    wordMap.set(word, (wordMap.get(word)||0)+1)
  })
  const sortedWordMapArray = [...wordMap].sort((a,b)=>b[1]-a[1]);
  return sortedWordMapArray
}

findWords(text);