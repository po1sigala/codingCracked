//take string of characters ( and )
///retur longests well formed paranthes substring

const longestValid = string => {
    let longest = 0;
    const arry = string.split("");
    let i = 1;
    current = 0;
    arry.map(char => {
        if (char + arry[i] === "()") {
            current++;
        }
        i++;
    });
    if (current > longest) {
        longest = current;
    }
    return longest * 2;
};
console.log(longestValid("(()()"));
