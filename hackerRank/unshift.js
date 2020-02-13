function circularArrayRotation(a, k, queries) {
    let i;
    console.log(a);
    const results = [];
    for (i = 0; i < k; i++) {
        const popped = a.pop();
        console.log(popped);
        a.unshift(popped);
    }
    console.log(a);
    for (i = 0; i < queries.length; i++) {
        results.push(a[queries[i]]);
    }

    return results;
}

console.log(circularArrayRotation([1, 2, 3], 1, [0, 1]));
