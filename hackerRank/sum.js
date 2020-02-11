const simpleArraySum = integers => {
    let sum = 0;
    integers.map(integer => {
        sum += integer;
    });
    return sum;
};
console.log(simpleArraySum([1, 2, 3]));
