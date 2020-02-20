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
    if (IP.indexOf(".") != -1) {
        let v4Arry = IP.split(".");
        for (i = 0; i < v4Arry.length; i++) {
            if (
                parseInt(v4Arry[i]) < 0 ||
                parseInt(v4Arry[i]) > 255 ||
                v4Arry.length != 4 ||
                v4Arry[i].indexOf("0") === 0 ||
                v4Arry[i].length < 1 ||
                /\D/.test(v4Arry[i])
            ) {
                if (v4Arry[i].length != 1) {
                    return (response = "Neither");
                }
            } else {
                response = "IPv4";
            }
        }
    } else if (IP.indexOf(":") != -1) {
        let v6Arry = IP.split(":");

        for (i = 0; i < v6Arry.length; i++) {
            if (
                v6Arry.length != 8 ||
                v6Arry[i].length < 1 ||
                v6Arry[i].length > 4 ||
                /[^a-f0-9A-F]/.test(v6Arry[i])
            ) {
                return (response = "Neither");
            } else {
                response = "IPv6";
            }
        }
    }
    return response;
};

console.log(validIPAddress("192.01.0.1"));
