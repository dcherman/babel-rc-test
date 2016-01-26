var babel = require("babel-core");

var transformed = babel.transformFileSync("./test-input.js", {
  plugins: []
});

console.log(transformed.code);
