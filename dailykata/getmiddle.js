function getMiddle(s) {
    //get the middle character or if its even the middle two
    switch (s.length % 2 === 0) {
        case true:
            return s.charAt(s.length / 2) + s.charAt(s.length / 2 + 1);
            break;
        case false:
            return s[Math.floor(s.length / 2)];
            break;
    }
}
let evenex = "abcdefghij";
let oddex = "abcde";
console.log(getMiddle(evenex));
