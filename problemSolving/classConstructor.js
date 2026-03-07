class TestCase {
  constructor(name, priority) {
    this.name = name;
    this.priority = priority;
    this.status = "NOT RUN"; // default value
  }

  run() {
    this.status = "PASS";
    console.log(`${this.name} executed → Status: ${this.status}`);
  }
}

const test1 = new TestCase("Login Test", "High");
const test2 = new TestCase("Signup Test", "Low");

console.log(test1.status); // NOT RUN
test1.run();                // Login Test executed → Status: PASS
console.log(test1.status); // PASS

console.log(test2.status); // NOT RUN
test2.run();                // Signup Test executed → Status: PASS
console.log(test2.status); // PASS