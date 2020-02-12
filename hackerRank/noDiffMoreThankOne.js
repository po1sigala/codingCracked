//given an array return max num of integers you can select where dif <= 1

//my area can only contain a which are within one digit of each other

const pickinga = (b, a) => {
    let longest = [];

    a.map(int => {
        let test = [];
        let i;
        for (i = 0; i < a.length; i++) {
            if (int - a[i] === 0 || int - a[i] === 1) {
                test.push(a[i]);
            }
        }

        if (test.length > longest.length) {
            longest = test;
        }
    });
    return longest.length;
};

console.log(pickinga(6));
