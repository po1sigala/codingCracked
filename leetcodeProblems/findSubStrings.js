//take in a string and an array of words find the tharting indexes of and combo of the words
//words are all same length
//no intervening characters

//if all the same length and theres no intervening characters
//whaterv is the length of the word i only need to check that many characters deep
const findSibString = (s, words) => {
 let lettercounter=0
 let lettersInString=s.split("").join("")
 let hash={}
lettersInString.map((letter)=>{
    //check if the letter is in one of the words
    let match=true
    words.map((word)=>{
        hash.push({})
        
        if (match===true){
            switch (word.indexOf(letter)===0&&match===true)
        {
            //check if the letter is at the start of the word
            case true:
                //sicne evry word is the sam elength we can check the next few letters based on words.length
                for(lettercounter;lettercounter<words.length;lettercounter++){
                    //if the letter matches the index then the word is matching
                    if(word[lettercounter]===letter){
                        //if its the last letter remove the word from our checklist
                        if(lettercounter===word.length-1){

                        }
                    }
                }   
                break
                case false:
                    break
                    default: console.log("something went wrong")
        }
    })}
    
})

};
console.log(findSibString("barfoothefoobarman", ["foo", "bar"]));
//spell a word
//remove that word from the array
//   const indexes = [];



/*wordLength = words.length;
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

return indexes;*/
