function factorial(n: number): number {

    if (n < 0) {
        throw new Error("Factorial is not defined for negative numbers");
    }

    let result = 1;

    for (let i = 2; i <= n; i++) {
        result = result * i;
    }

    return result;
}

// Example calls
console.log("Factorial of 5:", factorial(5));
console.log("Factorial of 3:", factorial(3));
console.log("Factorial of 0:", factorial(0));

// Negative number example
try {
    console.log("Factorial of -2:", factorial(-2));
} catch (error) {
    console.log("Error:", (error as Error).message);
}