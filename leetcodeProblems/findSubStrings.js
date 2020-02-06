//take in a string and an array of words find the tharting indexes of and combo of the words
//words are all same length
//no intervening characters

//if all the same length and theres no intervening characters
//whaterv is the length of the word i only need to check that many characters deep
const findSibString = (s, words) => {
    const indexes = [];
    wordLength = words.length;
    let i = 0;
    let counter = 0;
    let foundWord = false;
    let clone = words;
    SArray = s.split("");
    SArray.map(letter => {
        if (foundWord) {
            counter++;
            if (counter === 5) {
                foundWord = false;
                counter = 0;
            }
            return;
        }
        words.map(word => {
            let j = word.indexOf(letter);
            switch (j == 0) {
                case true:
                    const possibleMatch = SArray.slice(i, wordLength + 1);
                    if (possibleMatch === word) {
                        clone.splice(clone.indexOf(word), 1);
                    }
                case false:
                    return;
            }
        });
        if (clone.length === 0) {
            indexes.push(i);
        }
        i++;
        clone = words;
    });

    return indexes;
};
console.log(findSibString("barfoothefoobarman", ["foo", "bar"]));
//spell a word
//remove that word from the array
//
