/**
 * This function is slighly adjusted
 * version of this gist https://gist.github.com/borgar/451393
 */
const tokenize = input => {
  const matchers = {
    escape: /(\\\{|\\\}|\\\;)/,
    start: /([a-zA-Z0-9\!]+)\s*(\(.*\))?\s*(\:)?\s*(\{)/,
    end: /(\})/,
    compact: /([a-zA-Z0-9\!]+)\s*(\(.*\))?\s*(\;)/
  };

  let cursor, result, token, tokens = [];

  while (input) {
    token = null;
    cursor = input.length;

    for (let key in matchers) {
      result = matchers[key].exec(input);

      if (result && (result.index < cursor)) {
        token = {
          value: result[0],
          type: key,
          matches: result.slice(1)
        }
        cursor = result.index;
      }
    }

    if (cursor) {
      tokens.push({
        value: input.substr(0, cursor),
        type: 'unknown'
      });
    }

    if (token) {
      tokens.push(token);
    }

    input = input.substr(cursor + (token ? token.value.length : 0));
  }
  return tokens;
};

module.exports = tokenize;