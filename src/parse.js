const {
  TOKEN_TYPE_TAG_BEGIN,
  TOKEN_TYPE_TAG_END,
  TOKEN_TYPE_TAG_COMPACT,
  TOKEN_TYPE_ESCAPE,
  TYPE_TAG,
  TYPE_TEXT
} = require("./constants");

const trimAttributes = attributes => {
  return attributes ? ' ' + attributes.substring(1, attributes.length - 1) : '';
};

const parse = (tokens, meta, root = true) => {
  const nodes = [];
  let counter = 0, inside = false, text = "";
  let index, name, attributes, ignore;

  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];

    if (token.type === TOKEN_TYPE_ESCAPE) {
      token.value = token.value.replace(/\\/, '');

    } else if (token.type === TOKEN_TYPE_TAG_BEGIN) {
      counter++;

      if (!inside) {
        inside = true;
        index = i;
        name = token.matches[0];
        attributes = token.matches[1];
        ignore = token.matches[2];
      }

    } else if (token.type === TOKEN_TYPE_TAG_END) {
      counter--;

      if (counter === 0 && inside) {
        inside = false;
        nodes.push({
          name: name,
          attributes: trimAttributes(attributes),
          type: TYPE_TAG,
          compact: false,
          start: index,
          ignore: ignore ? true : false,
          end: i
        });
      }
      continue;

    } else if (token.type === TOKEN_TYPE_TAG_COMPACT && counter === 0) {
      nodes.push({
        type: TYPE_TEXT,
        text: text
      });

      text = "";

      nodes.push({
        name: token.matches[0],
        attributes: trimAttributes(token.matches[1]),
        type: TYPE_TAG,
        compact: true
      });
      continue;

    }

    if (counter === 0) {
      text += token.value;
    } else if (counter === 1 && text.length > 0) {
      nodes.push({
        type: TYPE_TEXT,
        text: text
      });
      text = "";
    }

  }

  if (text.length > 0) {
    nodes.push({
      type: TYPE_TEXT,
      text: text
    });
  }

  const children = [];

  for (let node of nodes) {
    if (node.type === TYPE_TAG) {

      if (node.compact) {
        children.push({
          type: TYPE_TAG,
          compact: true,
          name: node.name,
          attributes: node.attributes
        });
      } else {
        const innerTokens = tokens.slice(node.start + 1, node.end);
        children.push(
          parse(innerTokens, {
            name: node.name, attributes: node.attributes, ignore: node.ignore
          }, false)
        );
      }


    } else if (node.type === TYPE_TEXT) {
      children.push({
        type: TYPE_TEXT,
        children: node.text
      });
    }
  }

  if (root) {
    return children;
  }

  return {
    name: meta.name,
    type: TYPE_TAG,
    compact: false,
    attributes: meta.attributes,
    children: !meta.ignore ? children : [{
      type: TYPE_TEXT,
      children: tokens.map(token => token.value).join("")
    }]
  };
};

module.exports = parse;