//given a string rturn the string with words in rverse order
var reverseWords = function(s) {
    const arry = s.split(" ").reverse();

    trimmed = arry.filter((elem, i, arry) => {
        return arry[i] != "";
    });

    return trimmed.join(" ");
};
console.log(reverseWords(" hello world! "));
