//so we need the longest working open adn closed series

const longestValidParentheses = string => {
    let longest = 0;
    hash = {
        complete: 0,
        Open: 0
    };
    arry = string.split("");
    let i = 0;
    arry.map(char => {
        switch (char) {
            case "(":
                hash.Open += 1;

                break;
            case ")":
                if (arry[i] === arry.length - 1 && hash.Open > 0) {
                }
                if (hash.Open > 0) {
                    hash.Open -= 1;
                    hash.complete += 1;

                    if (hash.complete > longest) {
                        longest = hash.complete;
                    }
                }
        }
        i++;
    });

    return longest * 2;
};
console.log(longestValidParentheses("()(())"));

//())()
//(()))
