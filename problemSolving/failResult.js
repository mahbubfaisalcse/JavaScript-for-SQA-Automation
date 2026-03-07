
const results = ["PASS", "FAIL", "PASS", "FAIL", "FAIL", "PASS", "FAIL", "PASS", "FAIL", "PASS",];


const failCount = results.filter(result => result === "FAIL").length;

console.log(failCount); // 2