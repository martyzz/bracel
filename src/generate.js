const {
  TYPE_TAG,
  TYPE_TEXT
} = require("./constants");

const generate = nodes => {
  let markup = "";

  for (let node of nodes) {
    if (node.type === TYPE_TEXT) {
      markup += node.children;
    } else if (node.type === TYPE_TAG) {
      if (node.compact) {
        markup += `<${node.name}${node.attributes}>`;
      } else {
        markup += `<${node.name}${node.attributes}>${generate(node.children)}</${node.name}>`;
      }
    }
  }

  return markup;
};

module.exports = generate;