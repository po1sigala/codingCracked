function tickets(peopleInLine) {
    // you are a ticket seller, tickets cost 25 bucks and you have no change
    //take in a queue and see if you are able to sell a ticket to everyone
    //people in line have either a 100 25 or 50 dollar bill
    let moneyInRegister = [];
    let canIServeEveryone = "YES";
    peopleInLine.forEach(billValue => {
        //first sort the money so the indexes can be usefull
        moneyInRegister.sort();
        switch (billValue) {
            case 25:
                //if they pay with a 25 put a 25 in the register

                moneyInRegister.push(25);

                break;
            case 50:
                //fif they pay with a 50 they need a 25 back
                let changeIndex = moneyInRegister.indexOf(25);

                //if we dont have a 25 were done
                if (changeIndex == -1) {
                    canIServeEveryone = "NO";
                    return;
                } else {
                    //if we have change remove it so customer has it

                    moneyInRegister.splice(changeIndex, 1);
                    // console.log(`money in register is now ${moneyInRegister}`);

                    //add in their 50

                    moneyInRegister.push(50);
                }

                break;
            case 100:
                //i need 1 50 and two 25 or 3 25s
                let indexOf50 = moneyInRegister.indexOf(50);
                let indexedOf25 = moneyInRegister.indexOf(25);
                //if i have no 50s and not at least 3 25s i cant give change

                //if I have a 50 and a 25 give thm that as change
                if (indexOf50 != -1 && indexedOf25 != -1) {
                    //remove big bill first so i dont mess up index of the small ones
                    moneyInRegister.splice(indexOf50, 1);
                    moneyInRegister.splice(indexedOf25, 1);
                    moneyInRegister.push(100);
                }
                //if I have 3 25s give them that as change
                else if (moneyInRegister[2] == "25") {
                    moneyInRegister.splice(indexedOf25, 3);
                    moneyInRegister.push(100);
                } else {
                    canIServeEveryone = "NO";
                    return;
                }
                //otherwise just say no....shouldnt be necessary really this case will check if i have bugs take out later
                break;
        }
    });

    return canIServeEveryone;
}
let a = [
    25,
    25,
    25,
    100,
    25,
    25,
    50,
    100,
    25,
    50,
    25,
    100,
    25,
    25,
    25,
    100,
    25,
    25,
    50,
    100
];
let b = [50, 25, 100, 25, 25, 50, 100, 25, 25, 50, 100, 100, 25];
let c = [100, 25, 25, 50, 100, 25, 25, 50, 100, 100, 25];
let d = [100, 25, 50, 100, 25, 25, 50, 100, 100, 25];
let e = [100, 100, 25, 25, 50, 100, 100, 25];
let f = [100, 100, 25, 50, 100, 100, 25];
console.log(`this should be no ${tickets(a)}`);
console.log(`this should be no ${tickets(b)}`);
// console.log(`this should be no ${tickets(c)}`);
// console.log(`this should be no ${tickets(d)}`);
// console.log(`this should be no ${tickets(e)}`);
// console.log(`this should be no ${tickets(f)}`);

// console.log(tickets([25]));

25, 50, 25, 100, 25, 25, 50, 100, 25, 25, 50, 100, 100, 25;
// console.log(tickets([25, 25, 50, 25]));
