//ive got two kangaroos with a starting point and a a rate. return if they ever end up at the same spot at the sa,e time

function kangaroo(x1, v1, x2, v2) {
    let locationA = x1;
    let locationB = x2;
    let distantceStart = Math.abs(locationA - locationB);
    let increment = 0;
    let possible = "NO";

    do {
        locationB += v2;
        locationA += v1;
        increment = Math.abs(locationA - locationB);

        if (increment === 0) {
            possible = "YES";
        }
    } while (distantceStart > increment);
    return possible;
}
console.log(kangaroo(0, 2, 5, 3));
