const fs = require("fs");

const results = require("./results2.json");
const usernames = results.data.map(d => d.username);
const tests = results.results[0].allTests.reduce((rows, next, idx) => {
  return [...rows, `${usernames[idx]}, ${next[Object.keys(next)[0]]}`];
}, []);

fs.writeFileSync("./foo.csv", tests.join("\n"), "utf8");
