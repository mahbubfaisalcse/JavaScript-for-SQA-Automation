const testCases = [
  { id: 1, priority: "High" },
  { id: 2, priority: "Low" },
  { id: 3, priority: "High" }
];

const highPriorityTests = testCases.filter(
  test => test.priority === "High"
);

console.log(highPriorityTests);