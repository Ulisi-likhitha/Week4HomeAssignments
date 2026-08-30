const testExecutionSummary = {
    suiteName: "Login Test Suite",
    totalTests: 10,
    passedTests: 8,
    failedTests: 2,
    executionTime: "2 minutes"
};

// Print all property values
console.log("Suite Name:", testExecutionSummary.suiteName);
console.log("Total Tests:", testExecutionSummary.totalTests);
console.log("Passed Tests:", testExecutionSummary.passedTests);
console.log("Failed Tests:", testExecutionSummary.failedTests);
console.log("Execution Time:", testExecutionSummary.executionTime);

// Calculate pass percentage
const passPercentage =
    (testExecutionSummary.passedTests / testExecutionSummary.totalTests) * 100;

console.log("Pass Percentage:", passPercentage + "%");

// Print execution status
if (testExecutionSummary.failedTests === 0) {
    console.log("Execution Successful");
} else {
    console.log("Execution Completed with Failures");
}