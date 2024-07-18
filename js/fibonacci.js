
function FibonacciSequence(n) {
    var a = 0;
    var b = 1;
    var sum = 0;

    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }

    for (let i = 2; i <= n; i++) {
        sum = a + b;
        a = b;
        b = sum;
    }

    return sum;
}

console.log(FibonacciSequence(3));