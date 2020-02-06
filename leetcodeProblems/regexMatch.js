//give input string and pattern implement regex matching for "." and "*"
//"." matches a single char and * matches the preceding element
//match must match entire string not partial
const isMatch = (s, p) => {
    const pattern = `^${p}$`;
    console.log(`pattern is ${pattern}`);
    const regex = new RegExp(pattern);
    return regex.test(s);
};
console.log(isMatch("aa", "a*"));
