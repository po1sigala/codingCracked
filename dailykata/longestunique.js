function longest(s1, s2) {
    let hash = {};
    let combinedArray = (s1 + s2).split("").sort();
    const uniques = [];
    combinedArray.forEach(letter => {
        //check if its in the object
        if (hash[letter]) {
            return;
        } else {
            //create a property of the letter and set its value to 1
            hash[letter] = 1;
            uniques.push(letter);
        }
    });
    return uniques.join("");
}
console.log(longest("qzaaabbbcde", "aabffg"));
