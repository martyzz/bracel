const generate = nodes => {
  let markup = "";

  for (let node of nodes) {
      if (node.type === "text") {
          markup += node.children;
      } else if (node.type === "tag") {
          if (node.compact) {
              markup += `<${node.name}${node.attrs}>`;
          } else {
              markup += `<${node.name}${node.attrs}>${generate(node.children)}</${node.name}>`;
          }
      }
  }

  return markup;
};

module.exports = generate;