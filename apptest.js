const add = require("./app");
const assert = require("node:assert");

assert.strictEqual(add(10, 20), 30);

console.log("Test passed!");