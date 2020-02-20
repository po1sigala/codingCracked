/*
IPv4
adresses  usually have four numbers from 0 -255 seperated by dots

a leading zero is invalid

IPv6
four hexadecimals
groups seperated by colons
can omit leading zeros
cant have back to back colons

return IPv4, IPv6, or Neither
*/

var validIPAddress = function(IP) {
    let response = "Neither";
    if (IP.indexOf(".")) {
        let v4Arry = IP.split(".");
        v4Arry.map(intGroup => {
            // console.log(intGroup);

            if (
                parseInt(intGroup) < 0 ||
                parseInt(intGroup) > 255 ||
                v4Arry.length != 4 ||
                intGroup.indexOf("0") === 0 ||
                /\D/.test(intGroup)
            ) {
                return;
            } else {
                response = "IPv4";
            }
        });
    } else if (IP.indexOf(":")) {
        let v6Arry = IP.split(":");
        v6Arry.map(hexiGroup => {
            console.log();
            if (
                v6Arry.length != 8 ||
                hexiGroup.length < 1 ||
                hexiGroup.length > 4 ||
                hexiGroup.test(/[^a-z0-9]/)
            ) {
                return "Neither";
            } else if (hexiGroup.length != 4 && hexiGroup.indexOf("0") != 0) {
                return "Neither";
            } else {
                return "IPv6";
            }
        });
    }
    return response;
};

console.log(validIPAddress("172.16.254.1"));
