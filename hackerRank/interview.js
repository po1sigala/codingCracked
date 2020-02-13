console.log(`interview question`);
function firstRepeatedWord(sentence) {
    // Write your code here

    //input is a string of sentences
    //split it into iterable arry of words
    let wordArry = sentence.split(" ");
    //need to handle the punctuation
    let lastWord = wordArry.pop();
    lastWord = lastWord.split("");
    lastWord.pop();
    lastWord = lastWord.join("");
    wordArry.push(lastWord);

    //example [[we][work][hard][because][hard][work][pays]]
    //the period will mess up the last word

    function returnFirstRecurring(arry) {
        console.log(arry);
        for (i = 0; i < arry.length; i++) {
            if (arry[i] != "") {
                if (arry.indexOf(arry[i]) < i) {
                    return arry[i];
                }
            }
        }
    }

    return returnFirstRecurring(wordArry);
}

console.log(firstRepeatedWord("that           that occurs sometimes"));
