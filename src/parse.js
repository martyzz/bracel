const parse = (tokens, meta, root = true) => {
  const nodes = [];
  let counter = 0, inside = false, text = "";
  let index, name, attrs, ignore;

  for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];

      if (token.type === "escape") {
          token.value = token.value.replace(/\\/, '');

      } else if (token.type === "start") {
          counter++;

          if (!inside) {
              inside = true;
              index = i;
              name = token.matches[0];
              attrs = token.matches[1];
              ignore = token.matches[2];
          }

      } else if (token.type === "end") {
          counter--;

          if (counter === 0 && inside) {
              inside = false;
              const endIndex = i;
              nodes.push({
                  name: name,
                  attrs: attrs ? ' ' + attrs.substring(1, attrs.length - 1) : '', // TODO: add and its not empty protože design když jsou empty
                  type: "tag",
                  start: index,
                  ignore: ignore ? true : false,
                  end: endIndex
              });
          }
          continue;

      } else if (token.type === "compact" && counter === 0) {
          nodes.push({
              type: "text",
              text: text
          });

          text = "";

          nodes.push({
              name: token.matches[0],
              attrs: token.matches[1] ? ' ' + token.matches[1].substring(1, token.matches[1].length - 1) : '',
              type: "tag-compact"
          });
          continue;

      }

      if (counter === 0) {
          text += token.value;
      } else if (counter === 1 && text.length > 0) {
          nodes.push({
              type: "text",
              text: text
          });
          text = "";
      }

  }

  if (text.length > 0) {
      nodes.push({
          type: "text",
          text: text
      });
  }

  const children = [];

  for (let node of nodes) {
      if (node.type === "tag") {
          const innerTokens = tokens.slice(
              node.start + 1, node.end
          );
          children.push(
              parse(innerTokens, {
                  name: node.name,
                  attrs: node.attrs,
                  ignore: node.ignore
              }, false)
          );
      } else if (node.type === "text") {
          children.push({
              type: "text",
              children: node.text
          });
      } else if (node.type === "tag-compact") {
          children.push({
              type: "tag",
              compact: true,
              name: node.name,
              attrs: node.attrs
          });
      }
  }

  if (root) {
      return children;
  }

  return {
      name: meta.name,
      type: "tag",
      compact: false,
      attrs: meta.attrs,
      children: !meta.ignore ? children : [{
          type: "text",
          children: tokens.map(token => token.value).join("")
      }]
  };
};

module.exports = parse;