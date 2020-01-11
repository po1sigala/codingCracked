function toCamelCase(str) {
    //split it into characters
    let splitstring = str.split("");

    //if its the first letter leave it alone
    //if it comes after a dash or a underscore capitalize it
    let capitalizeTheLetter = false;

    let camelCaseAndRemoveDash = arry => {
        let newArry = [];
        arry.forEach(char => {
            switch (capitalizeTheLetter) {
                //if true capitalize it and make my checker be false so next one isnt capitalized
                case true:
                    char = char.toUpperCase();

                    newArry.push(char);

                    capitalizeTheLetter = false;
                    break;
                //if false check if its a dash or underscore in which case make checker true so next letter is capitalized
                case false:
                    if (char === "-" || char === "_") {
                        capitalizeTheLetter = true;
                    } else {
                        newArry.push(char);
                    }
                    break;
            }
        });
        return newArry.join("");
    };
    return camelCaseAndRemoveDash(splitstring);
}
console.log("checking case that starts with lower case");
console.log(toCamelCase("camel-this-case"));
console.log("now with a capital at the start");
console.log(toCamelCase("All_Start-With-caps"));
