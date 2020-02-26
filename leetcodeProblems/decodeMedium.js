var numDecodings = function(s) {
    //take in a string which is a number and resturn the number of ways it can be decoded

    //should be based on the lnegth doesnt matter what the numbers are

    /*
only goes up to 26
1,2,3,6
length = 1 output 1
length 2 output 2
length 3 output 3
121
1 count it 
2 count it
then check concat of 1 and 2 12 if <27 then count it
for instance 321 would count 3 and count 2 but not count 32 but then count 1 and 21 
1223216
*/
    const numArray = s.split("");
    let result = 1;
    for (i = 0; i < numArray.length; i++) {
        if (
            parseInt(numArray[i - 1] + numArray[i]) < 27 &&
            parseInt(numArray[i - 1] + numArray[i]) > 0
        ) {
            result++;
        }
    }
};
