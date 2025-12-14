const biblicalVerses = [
    "I am crucified with Christ: nevertheless I live; yet not I, but Christ liveth in me. (Galatians 2:20)",
    "A new heart also will I give you, and a new spirit will I put within you: and I will take away the stony heart out of your flesh. (Ezekiel 36:26)",
    "Therefore if any man be in Christ, he is a new creature: old things are passed away; behold, all things are become new. (2 Corinthians 5:17)",
    "Knowing this, that our old man is crucified with him, that the body of sin might be destroyed, that henceforth we should not serve sin. (Romans 6:6)",
    "And you hath he quickened, who were dead in trespasses and sins. (Ephesians 2:1)",
    "For by grace are ye saved through faith; and that not of yourselves: it is the gift of God. (Ephesians 2:8)",
    "Not of works, lest any man should boast. (Ephesians 2:9)",
    "Not by works of righteousness which we have done, but according to his mercy he saved us, by the washing of regeneration, and renewing of the Holy Ghost. (Titus 3:5)",
    "Which were born, not of blood, nor of the will of the flesh, nor of the will of man, but of God. (John 1:13)",
    "So then it is not of him that willeth, nor of him that runneth, but of God that sheweth mercy. (Romans 9:16)",
    "But by the grace of God I am what I am: and his grace which was bestowed upon me was not in vain. (1 Corinthians 15:10)"
];

function HolyIpsum(count=4) {
    let texts = [];
    for (let i=0; i<count;i++) {
        const randomIndex = Math.floor(Math.random()*biblicalVerses.length);
        texts.push(biblicalVerses[randomIndex]);
    }
    const results = texts.join(" ");
    return results;
};

module.exports = HolyIpsum;





