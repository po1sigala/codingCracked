function disemvowel(str) {
    const regex = /[aeiou]/gi;
    str = str.replace(regex, "");

    return str;
}
let novowels = disemvowel("no vowels here");
console.log(novowels);
