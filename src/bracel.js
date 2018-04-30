const tokenize = require("./tokenize");
const parse = require("./parse");
const generate = require("./generate");

const bracel = input => {
  const tokens = tokenize(input);
  const nodes = parse(tokens);
  const markup = generate(nodes);

  return markup;
};

if (typeof window === "undefined") {
  module.exports = bracel;
} else {
  window.bracel = bracel;
}
