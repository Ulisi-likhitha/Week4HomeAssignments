function fibonacci(n: number): number {

    let a = 0;
    let b = 1;

    if (n === 0) {
        return a;
    }

    if (n === 1) {
        return b;
    }

    for (let i = 2; i <= n; i++) {
        let next = a + b;
        a = b;
        b = next;
    }

    return b;
}

// Example calls
console.log("Fibonacci of 0:", fibonacci(0));
console.log("Fibonacci of 1:", fibonacci(1));
console.log("Fibonacci of 5:", fibonacci(5));
console.log("Fibonacci of 7:", fibonacci(7));
console.log("Fibonacci of 10:", fibonacci(10));