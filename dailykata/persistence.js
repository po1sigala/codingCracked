//break down number to where its multiplicitive output is a signle digit aka 25= 2*5=10 1*0=0 output is 0

function persistence(num, count) {
    if (typeof num === "number") {
        num = num.toString();
    }
    splitnum = num.split("");

    let product = 1;
    arryProduct = splitnum.forEach(num => {
        num = parseInt(num);

        product *= num;
    });
    if (product > 9) {
        if (count) {
            count++;
            persistence(product, count);
        } else {
            persistence(product);
        }
    } else {
        return product;
    }
}
console.log(persistence("2222"));
