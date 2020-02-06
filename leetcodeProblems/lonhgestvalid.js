//take string of characters ( and )
///retur longests well formed paranthes substring

const longestValid = string => {
    //define a hash
    let hash = {
        openPara: 0,
        closedPara: 0
    };
    let max = 0;
    arry = string.split("");
    arry.map(char => {
        switch (char) {
            case "(":
                hash.openPara += 1;
                break;
            case ")":
                hash.closedPara += 1;
                break;
        }
    });
    //now that ive counted the number of open and closed the smallest substring will be the smallest numberas long  as there is at least one
    switch (hash.openPara - hash.closedPara > 0) {
        case true:
            //if true then closed is limiting
            max = hash.closedPara;
            break;
        case false:
            max = hash.openPara;
            break;
        default:
            max = hash.openPara;
    }
    return max * 2;
};
console.log(longestValid("()"));
