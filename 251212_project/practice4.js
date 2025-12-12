function countVowels(str) {
    const strArr = str.split("");
    let count = 0;
    const vowels = ["a", "e", "i", "o", "u"];
    for (let i = 0; i<strArr.length; i++) {
        if (vowels.includes(strArr[i].toLowerCase())) {
            count += 1;
        }
    }
    return count;
}

console.log(countVowels('ApplE'));
