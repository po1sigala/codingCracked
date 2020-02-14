//pair socks by color for sale
//get an arry of ints representing th ecolors
//return how many pairs i can make
const sortSocks = (numSocks, sockArry) => {
    let matches = 0;
    let seenBefore = [];
    sockArry.map(int => {
        if (seenBefore.indexOf(int) === -1) {
            seenBefore.push(int);
        } else {
            matches++;
            seenBefore.splice(seenBefore.indexOf(int), 1);
        }
    });
    return matches;
};
console.log(sortSocks(10, [1, 1, 2, 2, 1, 2, 2]));
