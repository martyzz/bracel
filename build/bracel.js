(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = {
  TOKEN_TYPE_TAG_BEGIN: "token-type/tag-begin",
  TOKEN_TYPE_TAG_END: "token-type/tag-end",
  TOKEN_TYPE_TAG_COMPACT: "token-type/tag-compact",
  TOKEN_TYPE_ESCAPE: "token-type/escape",

  TYPE_TAG: "type/tag",
  TYPE_TEXT: "type/text"
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnN0YW50cy5qcyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiVE9LRU5fVFlQRV9UQUdfQkVHSU4iLCJUT0tFTl9UWVBFX1RBR19FTkQiLCJUT0tFTl9UWVBFX1RBR19DT01QQUNUIiwiVE9LRU5fVFlQRV9FU0NBUEUiLCJUWVBFX1RBRyIsIlRZUEVfVEVYVCJdLCJtYXBwaW5ncyI6IkFBQUFBLE9BQU9DLE9BQVAsR0FBaUI7QUFDZkMsd0JBQXNCLHNCQURQO0FBRWZDLHNCQUFvQixvQkFGTDtBQUdmQywwQkFBd0Isd0JBSFQ7QUFJZkMscUJBQW1CLG1CQUpKOztBQU1mQyxZQUFVLFVBTks7QUFPZkMsYUFBVztBQVBJLENBQWpCIiwiZmlsZSI6ImNvbnN0YW50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0ge1xyXG4gIFRPS0VOX1RZUEVfVEFHX0JFR0lOOiBcInRva2VuLXR5cGUvdGFnLWJlZ2luXCIsXHJcbiAgVE9LRU5fVFlQRV9UQUdfRU5EOiBcInRva2VuLXR5cGUvdGFnLWVuZFwiLFxyXG4gIFRPS0VOX1RZUEVfVEFHX0NPTVBBQ1Q6IFwidG9rZW4tdHlwZS90YWctY29tcGFjdFwiLFxyXG4gIFRPS0VOX1RZUEVfRVNDQVBFOiBcInRva2VuLXR5cGUvZXNjYXBlXCIsXHJcblxyXG4gIFRZUEVfVEFHOiBcInR5cGUvdGFnXCIsXHJcbiAgVFlQRV9URVhUOiBcInR5cGUvdGV4dFwiXHJcbn07Il19
},{}],2:[function(require,module,exports){
var tokenize = require("./tokenize");
var parse = require("./parse");
var generate = require("./generate");

var bracel = function bracel(input) {
  var tokens = tokenize(input);
  var nodes = parse(tokens);
  var markup = generate(nodes);

  return markup;
};

if (typeof window === "undefined") {
  module.exports = bracel;
} else {
  window.bracel = bracel;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfYWEwZDdiNWMuanMiXSwibmFtZXMiOlsidG9rZW5pemUiLCJyZXF1aXJlIiwicGFyc2UiLCJnZW5lcmF0ZSIsImJyYWNlbCIsInRva2VucyIsImlucHV0Iiwibm9kZXMiLCJtYXJrdXAiLCJ3aW5kb3ciLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQSxJQUFNQSxXQUFXQyxRQUFRLFlBQVIsQ0FBakI7QUFDQSxJQUFNQyxRQUFRRCxRQUFRLFNBQVIsQ0FBZDtBQUNBLElBQU1FLFdBQVdGLFFBQVEsWUFBUixDQUFqQjs7QUFFQSxJQUFNRyxTQUFTLFNBQVRBLE1BQVMsUUFBUztBQUN0QixNQUFNQyxTQUFTTCxTQUFTTSxLQUFULENBQWY7QUFDQSxNQUFNQyxRQUFRTCxNQUFNRyxNQUFOLENBQWQ7QUFDQSxNQUFNRyxTQUFTTCxTQUFTSSxLQUFULENBQWY7O0FBRUEsU0FBT0MsTUFBUDtBQUNELENBTkQ7O0FBUUEsSUFBSSxPQUFPQyxNQUFQLEtBQWtCLFdBQXRCLEVBQW1DO0FBQ2pDQyxTQUFPQyxPQUFQLEdBQWlCUCxNQUFqQjtBQUNELENBRkQsTUFFTztBQUNMSyxTQUFPTCxNQUFQLEdBQWdCQSxNQUFoQjtBQUNEIiwiZmlsZSI6ImZha2VfYWEwZDdiNWMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB0b2tlbml6ZSA9IHJlcXVpcmUoXCIuL3Rva2VuaXplXCIpO1xyXG5jb25zdCBwYXJzZSA9IHJlcXVpcmUoXCIuL3BhcnNlXCIpO1xyXG5jb25zdCBnZW5lcmF0ZSA9IHJlcXVpcmUoXCIuL2dlbmVyYXRlXCIpO1xyXG5cclxuY29uc3QgYnJhY2VsID0gaW5wdXQgPT4ge1xyXG4gIGNvbnN0IHRva2VucyA9IHRva2VuaXplKGlucHV0KTtcclxuICBjb25zdCBub2RlcyA9IHBhcnNlKHRva2Vucyk7XHJcbiAgY29uc3QgbWFya3VwID0gZ2VuZXJhdGUobm9kZXMpO1xyXG5cclxuICByZXR1cm4gbWFya3VwO1xyXG59O1xyXG5cclxuaWYgKHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICBtb2R1bGUuZXhwb3J0cyA9IGJyYWNlbDtcclxufSBlbHNlIHtcclxuICB3aW5kb3cuYnJhY2VsID0gYnJhY2VsO1xyXG59XHJcbiJdfQ==
},{"./generate":3,"./parse":4,"./tokenize":5}],3:[function(require,module,exports){
var _require = require("./constants"),
    TYPE_TAG = _require.TYPE_TAG,
    TYPE_TEXT = _require.TYPE_TEXT;

var generate = function generate(nodes) {
  var markup = "";

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = nodes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var node = _step.value;

      if (node.type === TYPE_TEXT) {
        markup += node.children;
      } else if (node.type === TYPE_TAG) {
        if (node.compact) {
          markup += "<" + node.name + node.attributes + ">";
        } else {
          markup += "<" + node.name + node.attributes + ">" + generate(node.children) + "</" + node.name + ">";
        }
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return markup;
};

module.exports = generate;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdlbmVyYXRlLmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJUWVBFX1RBRyIsIlRZUEVfVEVYVCIsImdlbmVyYXRlIiwibWFya3VwIiwibm9kZXMiLCJub2RlIiwidHlwZSIsImNoaWxkcmVuIiwiY29tcGFjdCIsIm5hbWUiLCJhdHRyaWJ1dGVzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6ImVBR0lBLFFBQVEsYUFBUixDO0lBRkZDLFEsWUFBQUEsUTtJQUNBQyxTLFlBQUFBLFM7O0FBR0YsSUFBTUMsV0FBVyxTQUFYQSxRQUFXLFFBQVM7QUFDeEIsTUFBSUMsU0FBUyxFQUFiOztBQUR3QjtBQUFBO0FBQUE7O0FBQUE7QUFHeEIseUJBQWlCQyxLQUFqQiw4SEFBd0I7QUFBQSxVQUFmQyxJQUFlOztBQUN0QixVQUFJQSxLQUFLQyxJQUFMLEtBQWNMLFNBQWxCLEVBQTZCO0FBQzNCRSxrQkFBVUUsS0FBS0UsUUFBZjtBQUNELE9BRkQsTUFFTyxJQUFJRixLQUFLQyxJQUFMLEtBQWNOLFFBQWxCLEVBQTRCO0FBQ2pDLFlBQUlLLEtBQUtHLE9BQVQsRUFBa0I7QUFDaEJMLDBCQUFjRSxLQUFLSSxJQUFuQixHQUEwQkosS0FBS0ssVUFBL0I7QUFDRCxTQUZELE1BRU87QUFDTFAsMEJBQWNFLEtBQUtJLElBQW5CLEdBQTBCSixLQUFLSyxVQUEvQixTQUE2Q1IsU0FBU0csS0FBS0UsUUFBZCxDQUE3QyxVQUF5RUYsS0FBS0ksSUFBOUU7QUFDRDtBQUNGO0FBQ0Y7QUFidUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFleEIsU0FBT04sTUFBUDtBQUNELENBaEJEOztBQWtCQVEsT0FBT0MsT0FBUCxHQUFpQlYsUUFBakIiLCJmaWxlIjoiZ2VuZXJhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7XHJcbiAgVFlQRV9UQUcsXHJcbiAgVFlQRV9URVhUXHJcbn0gPSByZXF1aXJlKFwiLi9jb25zdGFudHNcIik7XHJcblxyXG5jb25zdCBnZW5lcmF0ZSA9IG5vZGVzID0+IHtcclxuICBsZXQgbWFya3VwID0gXCJcIjtcclxuXHJcbiAgZm9yIChsZXQgbm9kZSBvZiBub2Rlcykge1xyXG4gICAgaWYgKG5vZGUudHlwZSA9PT0gVFlQRV9URVhUKSB7XHJcbiAgICAgIG1hcmt1cCArPSBub2RlLmNoaWxkcmVuO1xyXG4gICAgfSBlbHNlIGlmIChub2RlLnR5cGUgPT09IFRZUEVfVEFHKSB7XHJcbiAgICAgIGlmIChub2RlLmNvbXBhY3QpIHtcclxuICAgICAgICBtYXJrdXAgKz0gYDwke25vZGUubmFtZX0ke25vZGUuYXR0cmlidXRlc30+YDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBtYXJrdXAgKz0gYDwke25vZGUubmFtZX0ke25vZGUuYXR0cmlidXRlc30+JHtnZW5lcmF0ZShub2RlLmNoaWxkcmVuKX08LyR7bm9kZS5uYW1lfT5gO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbWFya3VwO1xyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBnZW5lcmF0ZTsiXX0=
},{"./constants":1}],4:[function(require,module,exports){
var _require = require("./constants"),
    TOKEN_TYPE_TAG_BEGIN = _require.TOKEN_TYPE_TAG_BEGIN,
    TOKEN_TYPE_TAG_END = _require.TOKEN_TYPE_TAG_END,
    TOKEN_TYPE_TAG_COMPACT = _require.TOKEN_TYPE_TAG_COMPACT,
    TOKEN_TYPE_ESCAPE = _require.TOKEN_TYPE_ESCAPE,
    TYPE_TAG = _require.TYPE_TAG,
    TYPE_TEXT = _require.TYPE_TEXT;

var trimAttributes = function trimAttributes(attributes) {
  return attributes ? ' ' + attributes.substring(1, attributes.length - 1) : '';
};

var parse = function parse(tokens, meta) {
  var root = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  var nodes = [];
  var counter = 0,
      inside = false,
      text = "";
  var index = void 0,
      name = void 0,
      attributes = void 0,
      ignore = void 0;

  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i];

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

  var children = [];

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = nodes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var node = _step.value;

      if (node.type === TYPE_TAG) {

        if (node.compact) {
          children.push({
            type: TYPE_TAG,
            compact: true,
            name: node.name,
            attributes: node.attributes
          });
        } else {
          var innerTokens = tokens.slice(node.start + 1, node.end);
          children.push(parse(innerTokens, {
            name: node.name, attributes: node.attributes, ignore: node.ignore
          }, false));
        }
      } else if (node.type === TYPE_TEXT) {
        children.push({
          type: TYPE_TEXT,
          children: node.text
        });
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
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
      children: tokens.map(function (token) {
        return token.value;
      }).join("")
    }]
  };
};

module.exports = parse;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcnNlLmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJUT0tFTl9UWVBFX1RBR19CRUdJTiIsIlRPS0VOX1RZUEVfVEFHX0VORCIsIlRPS0VOX1RZUEVfVEFHX0NPTVBBQ1QiLCJUT0tFTl9UWVBFX0VTQ0FQRSIsIlRZUEVfVEFHIiwiVFlQRV9URVhUIiwidHJpbUF0dHJpYnV0ZXMiLCJhdHRyaWJ1dGVzIiwic3Vic3RyaW5nIiwibGVuZ3RoIiwicGFyc2UiLCJ0b2tlbnMiLCJtZXRhIiwicm9vdCIsIm5vZGVzIiwiY291bnRlciIsImluc2lkZSIsInRleHQiLCJpbmRleCIsIm5hbWUiLCJpZ25vcmUiLCJpIiwidG9rZW4iLCJ0eXBlIiwidmFsdWUiLCJyZXBsYWNlIiwibWF0Y2hlcyIsInB1c2giLCJjb21wYWN0Iiwic3RhcnQiLCJlbmQiLCJjaGlsZHJlbiIsIm5vZGUiLCJpbm5lclRva2VucyIsInNsaWNlIiwibWFwIiwiam9pbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJlQU9JQSxRQUFRLGFBQVIsQztJQU5GQyxvQixZQUFBQSxvQjtJQUNBQyxrQixZQUFBQSxrQjtJQUNBQyxzQixZQUFBQSxzQjtJQUNBQyxpQixZQUFBQSxpQjtJQUNBQyxRLFlBQUFBLFE7SUFDQUMsUyxZQUFBQSxTOztBQUdGLElBQU1DLGlCQUFpQixTQUFqQkEsY0FBaUIsYUFBYztBQUNuQyxTQUFPQyxhQUFhLE1BQU1BLFdBQVdDLFNBQVgsQ0FBcUIsQ0FBckIsRUFBd0JELFdBQVdFLE1BQVgsR0FBb0IsQ0FBNUMsQ0FBbkIsR0FBb0UsRUFBM0U7QUFDRCxDQUZEOztBQUlBLElBQU1DLFFBQVEsU0FBUkEsS0FBUSxDQUFDQyxNQUFELEVBQVNDLElBQVQsRUFBK0I7QUFBQSxNQUFoQkMsSUFBZ0IsdUVBQVQsSUFBUzs7QUFDM0MsTUFBTUMsUUFBUSxFQUFkO0FBQ0EsTUFBSUMsVUFBVSxDQUFkO0FBQUEsTUFBaUJDLFNBQVMsS0FBMUI7QUFBQSxNQUFpQ0MsT0FBTyxFQUF4QztBQUNBLE1BQUlDLGNBQUo7QUFBQSxNQUFXQyxhQUFYO0FBQUEsTUFBaUJaLG1CQUFqQjtBQUFBLE1BQTZCYSxlQUE3Qjs7QUFFQSxPQUFLLElBQUlDLElBQUksQ0FBYixFQUFnQkEsSUFBSVYsT0FBT0YsTUFBM0IsRUFBbUNZLEdBQW5DLEVBQXdDO0FBQ3RDLFFBQU1DLFFBQVFYLE9BQU9VLENBQVAsQ0FBZDs7QUFFQSxRQUFJQyxNQUFNQyxJQUFOLEtBQWVwQixpQkFBbkIsRUFBc0M7QUFDcENtQixZQUFNRSxLQUFOLEdBQWNGLE1BQU1FLEtBQU4sQ0FBWUMsT0FBWixDQUFvQixJQUFwQixFQUEwQixFQUExQixDQUFkO0FBRUQsS0FIRCxNQUdPLElBQUlILE1BQU1DLElBQU4sS0FBZXZCLG9CQUFuQixFQUF5QztBQUM5Q2U7O0FBRUEsVUFBSSxDQUFDQyxNQUFMLEVBQWE7QUFDWEEsaUJBQVMsSUFBVDtBQUNBRSxnQkFBUUcsQ0FBUjtBQUNBRixlQUFPRyxNQUFNSSxPQUFOLENBQWMsQ0FBZCxDQUFQO0FBQ0FuQixxQkFBYWUsTUFBTUksT0FBTixDQUFjLENBQWQsQ0FBYjtBQUNBTixpQkFBU0UsTUFBTUksT0FBTixDQUFjLENBQWQsQ0FBVDtBQUNEO0FBRUYsS0FYTSxNQVdBLElBQUlKLE1BQU1DLElBQU4sS0FBZXRCLGtCQUFuQixFQUF1QztBQUM1Q2M7O0FBRUEsVUFBSUEsWUFBWSxDQUFaLElBQWlCQyxNQUFyQixFQUE2QjtBQUMzQkEsaUJBQVMsS0FBVDtBQUNBRixjQUFNYSxJQUFOLENBQVc7QUFDVFIsZ0JBQU1BLElBREc7QUFFVFosc0JBQVlELGVBQWVDLFVBQWYsQ0FGSDtBQUdUZ0IsZ0JBQU1uQixRQUhHO0FBSVR3QixtQkFBUyxLQUpBO0FBS1RDLGlCQUFPWCxLQUxFO0FBTVRFLGtCQUFRQSxTQUFTLElBQVQsR0FBZ0IsS0FOZjtBQU9UVSxlQUFLVDtBQVBJLFNBQVg7QUFTRDtBQUNEO0FBRUQsS0FqQk0sTUFpQkEsSUFBSUMsTUFBTUMsSUFBTixLQUFlckIsc0JBQWYsSUFBeUNhLFlBQVksQ0FBekQsRUFBNEQ7QUFDakVELFlBQU1hLElBQU4sQ0FBVztBQUNUSixjQUFNbEIsU0FERztBQUVUWSxjQUFNQTtBQUZHLE9BQVg7O0FBS0FBLGFBQU8sRUFBUDs7QUFFQUgsWUFBTWEsSUFBTixDQUFXO0FBQ1RSLGNBQU1HLE1BQU1JLE9BQU4sQ0FBYyxDQUFkLENBREc7QUFFVG5CLG9CQUFZRCxlQUFlZ0IsTUFBTUksT0FBTixDQUFjLENBQWQsQ0FBZixDQUZIO0FBR1RILGNBQU1uQixRQUhHO0FBSVR3QixpQkFBUztBQUpBLE9BQVg7QUFNQTtBQUVEOztBQUVELFFBQUliLFlBQVksQ0FBaEIsRUFBbUI7QUFDakJFLGNBQVFLLE1BQU1FLEtBQWQ7QUFDRCxLQUZELE1BRU8sSUFBSVQsWUFBWSxDQUFaLElBQWlCRSxLQUFLUixNQUFMLEdBQWMsQ0FBbkMsRUFBc0M7QUFDM0NLLFlBQU1hLElBQU4sQ0FBVztBQUNUSixjQUFNbEIsU0FERztBQUVUWSxjQUFNQTtBQUZHLE9BQVg7QUFJQUEsYUFBTyxFQUFQO0FBQ0Q7QUFFRjs7QUFFRCxNQUFJQSxLQUFLUixNQUFMLEdBQWMsQ0FBbEIsRUFBcUI7QUFDbkJLLFVBQU1hLElBQU4sQ0FBVztBQUNUSixZQUFNbEIsU0FERztBQUVUWSxZQUFNQTtBQUZHLEtBQVg7QUFJRDs7QUFFRCxNQUFNYyxXQUFXLEVBQWpCOztBQTVFMkM7QUFBQTtBQUFBOztBQUFBO0FBOEUzQyx5QkFBaUJqQixLQUFqQiw4SEFBd0I7QUFBQSxVQUFma0IsSUFBZTs7QUFDdEIsVUFBSUEsS0FBS1QsSUFBTCxLQUFjbkIsUUFBbEIsRUFBNEI7O0FBRTFCLFlBQUk0QixLQUFLSixPQUFULEVBQWtCO0FBQ2hCRyxtQkFBU0osSUFBVCxDQUFjO0FBQ1pKLGtCQUFNbkIsUUFETTtBQUVad0IscUJBQVMsSUFGRztBQUdaVCxrQkFBTWEsS0FBS2IsSUFIQztBQUlaWix3QkFBWXlCLEtBQUt6QjtBQUpMLFdBQWQ7QUFNRCxTQVBELE1BT087QUFDTCxjQUFNMEIsY0FBY3RCLE9BQU91QixLQUFQLENBQWFGLEtBQUtILEtBQUwsR0FBYSxDQUExQixFQUE2QkcsS0FBS0YsR0FBbEMsQ0FBcEI7QUFDQUMsbUJBQVNKLElBQVQsQ0FDRWpCLE1BQU11QixXQUFOLEVBQW1CO0FBQ2pCZCxrQkFBTWEsS0FBS2IsSUFETSxFQUNBWixZQUFZeUIsS0FBS3pCLFVBRGpCLEVBQzZCYSxRQUFRWSxLQUFLWjtBQUQxQyxXQUFuQixFQUVHLEtBRkgsQ0FERjtBQUtEO0FBR0YsT0FuQkQsTUFtQk8sSUFBSVksS0FBS1QsSUFBTCxLQUFjbEIsU0FBbEIsRUFBNkI7QUFDbEMwQixpQkFBU0osSUFBVCxDQUFjO0FBQ1pKLGdCQUFNbEIsU0FETTtBQUVaMEIsb0JBQVVDLEtBQUtmO0FBRkgsU0FBZDtBQUlEO0FBQ0Y7QUF4RzBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBMEczQyxNQUFJSixJQUFKLEVBQVU7QUFDUixXQUFPa0IsUUFBUDtBQUNEOztBQUVELFNBQU87QUFDTFosVUFBTVAsS0FBS08sSUFETjtBQUVMSSxVQUFNbkIsUUFGRDtBQUdMd0IsYUFBUyxLQUhKO0FBSUxyQixnQkFBWUssS0FBS0wsVUFKWjtBQUtMd0IsY0FBVSxDQUFDbkIsS0FBS1EsTUFBTixHQUFlVyxRQUFmLEdBQTBCLENBQUM7QUFDbkNSLFlBQU1sQixTQUQ2QjtBQUVuQzBCLGdCQUFVcEIsT0FBT3dCLEdBQVAsQ0FBVztBQUFBLGVBQVNiLE1BQU1FLEtBQWY7QUFBQSxPQUFYLEVBQWlDWSxJQUFqQyxDQUFzQyxFQUF0QztBQUZ5QixLQUFEO0FBTC9CLEdBQVA7QUFVRCxDQXhIRDs7QUEwSEFDLE9BQU9DLE9BQVAsR0FBaUI1QixLQUFqQiIsImZpbGUiOiJwYXJzZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtcclxuICBUT0tFTl9UWVBFX1RBR19CRUdJTixcclxuICBUT0tFTl9UWVBFX1RBR19FTkQsXHJcbiAgVE9LRU5fVFlQRV9UQUdfQ09NUEFDVCxcclxuICBUT0tFTl9UWVBFX0VTQ0FQRSxcclxuICBUWVBFX1RBRyxcclxuICBUWVBFX1RFWFRcclxufSA9IHJlcXVpcmUoXCIuL2NvbnN0YW50c1wiKTtcclxuXHJcbmNvbnN0IHRyaW1BdHRyaWJ1dGVzID0gYXR0cmlidXRlcyA9PiB7XHJcbiAgcmV0dXJuIGF0dHJpYnV0ZXMgPyAnICcgKyBhdHRyaWJ1dGVzLnN1YnN0cmluZygxLCBhdHRyaWJ1dGVzLmxlbmd0aCAtIDEpIDogJyc7XHJcbn07XHJcblxyXG5jb25zdCBwYXJzZSA9ICh0b2tlbnMsIG1ldGEsIHJvb3QgPSB0cnVlKSA9PiB7XHJcbiAgY29uc3Qgbm9kZXMgPSBbXTtcclxuICBsZXQgY291bnRlciA9IDAsIGluc2lkZSA9IGZhbHNlLCB0ZXh0ID0gXCJcIjtcclxuICBsZXQgaW5kZXgsIG5hbWUsIGF0dHJpYnV0ZXMsIGlnbm9yZTtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcclxuICAgIGNvbnN0IHRva2VuID0gdG9rZW5zW2ldO1xyXG5cclxuICAgIGlmICh0b2tlbi50eXBlID09PSBUT0tFTl9UWVBFX0VTQ0FQRSkge1xyXG4gICAgICB0b2tlbi52YWx1ZSA9IHRva2VuLnZhbHVlLnJlcGxhY2UoL1xcXFwvLCAnJyk7XHJcblxyXG4gICAgfSBlbHNlIGlmICh0b2tlbi50eXBlID09PSBUT0tFTl9UWVBFX1RBR19CRUdJTikge1xyXG4gICAgICBjb3VudGVyKys7XHJcblxyXG4gICAgICBpZiAoIWluc2lkZSkge1xyXG4gICAgICAgIGluc2lkZSA9IHRydWU7XHJcbiAgICAgICAgaW5kZXggPSBpO1xyXG4gICAgICAgIG5hbWUgPSB0b2tlbi5tYXRjaGVzWzBdO1xyXG4gICAgICAgIGF0dHJpYnV0ZXMgPSB0b2tlbi5tYXRjaGVzWzFdO1xyXG4gICAgICAgIGlnbm9yZSA9IHRva2VuLm1hdGNoZXNbMl07XHJcbiAgICAgIH1cclxuXHJcbiAgICB9IGVsc2UgaWYgKHRva2VuLnR5cGUgPT09IFRPS0VOX1RZUEVfVEFHX0VORCkge1xyXG4gICAgICBjb3VudGVyLS07XHJcblxyXG4gICAgICBpZiAoY291bnRlciA9PT0gMCAmJiBpbnNpZGUpIHtcclxuICAgICAgICBpbnNpZGUgPSBmYWxzZTtcclxuICAgICAgICBub2Rlcy5wdXNoKHtcclxuICAgICAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICAgICAgICBhdHRyaWJ1dGVzOiB0cmltQXR0cmlidXRlcyhhdHRyaWJ1dGVzKSxcclxuICAgICAgICAgIHR5cGU6IFRZUEVfVEFHLFxyXG4gICAgICAgICAgY29tcGFjdDogZmFsc2UsXHJcbiAgICAgICAgICBzdGFydDogaW5kZXgsXHJcbiAgICAgICAgICBpZ25vcmU6IGlnbm9yZSA/IHRydWUgOiBmYWxzZSxcclxuICAgICAgICAgIGVuZDogaVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnRpbnVlO1xyXG5cclxuICAgIH0gZWxzZSBpZiAodG9rZW4udHlwZSA9PT0gVE9LRU5fVFlQRV9UQUdfQ09NUEFDVCAmJiBjb3VudGVyID09PSAwKSB7XHJcbiAgICAgIG5vZGVzLnB1c2goe1xyXG4gICAgICAgIHR5cGU6IFRZUEVfVEVYVCxcclxuICAgICAgICB0ZXh0OiB0ZXh0XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdGV4dCA9IFwiXCI7XHJcblxyXG4gICAgICBub2Rlcy5wdXNoKHtcclxuICAgICAgICBuYW1lOiB0b2tlbi5tYXRjaGVzWzBdLFxyXG4gICAgICAgIGF0dHJpYnV0ZXM6IHRyaW1BdHRyaWJ1dGVzKHRva2VuLm1hdGNoZXNbMV0pLFxyXG4gICAgICAgIHR5cGU6IFRZUEVfVEFHLFxyXG4gICAgICAgIGNvbXBhY3Q6IHRydWVcclxuICAgICAgfSk7XHJcbiAgICAgIGNvbnRpbnVlO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBpZiAoY291bnRlciA9PT0gMCkge1xyXG4gICAgICB0ZXh0ICs9IHRva2VuLnZhbHVlO1xyXG4gICAgfSBlbHNlIGlmIChjb3VudGVyID09PSAxICYmIHRleHQubGVuZ3RoID4gMCkge1xyXG4gICAgICBub2Rlcy5wdXNoKHtcclxuICAgICAgICB0eXBlOiBUWVBFX1RFWFQsXHJcbiAgICAgICAgdGV4dDogdGV4dFxyXG4gICAgICB9KTtcclxuICAgICAgdGV4dCA9IFwiXCI7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgaWYgKHRleHQubGVuZ3RoID4gMCkge1xyXG4gICAgbm9kZXMucHVzaCh7XHJcbiAgICAgIHR5cGU6IFRZUEVfVEVYVCxcclxuICAgICAgdGV4dDogdGV4dFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBjaGlsZHJlbiA9IFtdO1xyXG5cclxuICBmb3IgKGxldCBub2RlIG9mIG5vZGVzKSB7XHJcbiAgICBpZiAobm9kZS50eXBlID09PSBUWVBFX1RBRykge1xyXG5cclxuICAgICAgaWYgKG5vZGUuY29tcGFjdCkge1xyXG4gICAgICAgIGNoaWxkcmVuLnB1c2goe1xyXG4gICAgICAgICAgdHlwZTogVFlQRV9UQUcsXHJcbiAgICAgICAgICBjb21wYWN0OiB0cnVlLFxyXG4gICAgICAgICAgbmFtZTogbm9kZS5uYW1lLFxyXG4gICAgICAgICAgYXR0cmlidXRlczogbm9kZS5hdHRyaWJ1dGVzXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgaW5uZXJUb2tlbnMgPSB0b2tlbnMuc2xpY2Uobm9kZS5zdGFydCArIDEsIG5vZGUuZW5kKTtcclxuICAgICAgICBjaGlsZHJlbi5wdXNoKFxyXG4gICAgICAgICAgcGFyc2UoaW5uZXJUb2tlbnMsIHtcclxuICAgICAgICAgICAgbmFtZTogbm9kZS5uYW1lLCBhdHRyaWJ1dGVzOiBub2RlLmF0dHJpYnV0ZXMsIGlnbm9yZTogbm9kZS5pZ25vcmVcclxuICAgICAgICAgIH0sIGZhbHNlKVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuXHJcblxyXG4gICAgfSBlbHNlIGlmIChub2RlLnR5cGUgPT09IFRZUEVfVEVYVCkge1xyXG4gICAgICBjaGlsZHJlbi5wdXNoKHtcclxuICAgICAgICB0eXBlOiBUWVBFX1RFWFQsXHJcbiAgICAgICAgY2hpbGRyZW46IG5vZGUudGV4dFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlmIChyb290KSB7XHJcbiAgICByZXR1cm4gY2hpbGRyZW47XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgbmFtZTogbWV0YS5uYW1lLFxyXG4gICAgdHlwZTogVFlQRV9UQUcsXHJcbiAgICBjb21wYWN0OiBmYWxzZSxcclxuICAgIGF0dHJpYnV0ZXM6IG1ldGEuYXR0cmlidXRlcyxcclxuICAgIGNoaWxkcmVuOiAhbWV0YS5pZ25vcmUgPyBjaGlsZHJlbiA6IFt7XHJcbiAgICAgIHR5cGU6IFRZUEVfVEVYVCxcclxuICAgICAgY2hpbGRyZW46IHRva2Vucy5tYXAodG9rZW4gPT4gdG9rZW4udmFsdWUpLmpvaW4oXCJcIilcclxuICAgIH1dXHJcbiAgfTtcclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcGFyc2U7Il19
},{"./constants":1}],5:[function(require,module,exports){
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _require = require("./constants"),
    TOKEN_TYPE_TAG_BEGIN = _require.TOKEN_TYPE_TAG_BEGIN,
    TOKEN_TYPE_TAG_END = _require.TOKEN_TYPE_TAG_END,
    TOKEN_TYPE_TAG_COMPACT = _require.TOKEN_TYPE_TAG_COMPACT,
    TOKEN_TYPE_ESCAPE = _require.TOKEN_TYPE_ESCAPE;

/**
 * This function is slighly adjusted
 * version of this gist https://gist.github.com/borgar/451393
 */


var tokenize = function tokenize(input) {
  var _matchers;

  var matchers = (_matchers = {}, _defineProperty(_matchers, TOKEN_TYPE_ESCAPE, /(\\\{|\\\}|\\\;)/), _defineProperty(_matchers, TOKEN_TYPE_TAG_BEGIN, /([a-zA-Z0-9\!]+)\s*(\(.*\))?\s*(\:)?\s*(\{)/), _defineProperty(_matchers, TOKEN_TYPE_TAG_END, /(\})/), _defineProperty(_matchers, TOKEN_TYPE_TAG_COMPACT, /([a-zA-Z0-9\!]+)\s*(\(.*\))?\s*(\;)/), _matchers);

  var cursor = void 0,
      result = void 0,
      token = void 0,
      tokens = [];

  while (input) {
    token = null;
    cursor = input.length;

    for (var key in matchers) {
      result = matchers[key].exec(input);

      if (result && result.index < cursor) {
        token = {
          value: result[0],
          type: key,
          matches: result.slice(1)
        };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRva2VuaXplLmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJUT0tFTl9UWVBFX1RBR19CRUdJTiIsIlRPS0VOX1RZUEVfVEFHX0VORCIsIlRPS0VOX1RZUEVfVEFHX0NPTVBBQ1QiLCJUT0tFTl9UWVBFX0VTQ0FQRSIsInRva2VuaXplIiwibWF0Y2hlcnMiLCJjdXJzb3IiLCJyZXN1bHQiLCJ0b2tlbiIsInRva2VucyIsImlucHV0IiwibGVuZ3RoIiwia2V5IiwiZXhlYyIsImluZGV4IiwidmFsdWUiLCJ0eXBlIiwibWF0Y2hlcyIsInNsaWNlIiwicHVzaCIsInN1YnN0ciIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7O2VBS0lBLFFBQVEsYUFBUixDO0lBSkZDLG9CLFlBQUFBLG9CO0lBQ0FDLGtCLFlBQUFBLGtCO0lBQ0FDLHNCLFlBQUFBLHNCO0lBQ0FDLGlCLFlBQUFBLGlCOztBQUdGOzs7Ozs7QUFJQSxJQUFNQyxXQUFXLFNBQVhBLFFBQVcsUUFBUztBQUFBOztBQUN4QixNQUFNQyx1REFDSEYsaUJBREcsRUFDaUIsa0JBRGpCLDhCQUVISCxvQkFGRyxFQUVvQiw2Q0FGcEIsOEJBR0hDLGtCQUhHLEVBR2tCLE1BSGxCLDhCQUlIQyxzQkFKRyxFQUlzQixxQ0FKdEIsYUFBTjs7QUFPQSxNQUFJSSxlQUFKO0FBQUEsTUFBWUMsZUFBWjtBQUFBLE1BQW9CQyxjQUFwQjtBQUFBLE1BQTJCQyxTQUFTLEVBQXBDOztBQUVBLFNBQU9DLEtBQVAsRUFBYztBQUNaRixZQUFRLElBQVI7QUFDQUYsYUFBU0ksTUFBTUMsTUFBZjs7QUFFQSxTQUFLLElBQUlDLEdBQVQsSUFBZ0JQLFFBQWhCLEVBQTBCO0FBQ3hCRSxlQUFTRixTQUFTTyxHQUFULEVBQWNDLElBQWQsQ0FBbUJILEtBQW5CLENBQVQ7O0FBRUEsVUFBSUgsVUFBV0EsT0FBT08sS0FBUCxHQUFlUixNQUE5QixFQUF1QztBQUNyQ0UsZ0JBQVE7QUFDTk8saUJBQU9SLE9BQU8sQ0FBUCxDQUREO0FBRU5TLGdCQUFNSixHQUZBO0FBR05LLG1CQUFTVixPQUFPVyxLQUFQLENBQWEsQ0FBYjtBQUhILFNBQVI7QUFLQVosaUJBQVNDLE9BQU9PLEtBQWhCO0FBQ0Q7QUFDRjs7QUFFRCxRQUFJUixNQUFKLEVBQVk7QUFDVkcsYUFBT1UsSUFBUCxDQUFZO0FBQ1ZKLGVBQU9MLE1BQU1VLE1BQU4sQ0FBYSxDQUFiLEVBQWdCZCxNQUFoQixDQURHO0FBRVZVLGNBQU07QUFGSSxPQUFaO0FBSUQ7O0FBRUQsUUFBSVIsS0FBSixFQUFXO0FBQ1RDLGFBQU9VLElBQVAsQ0FBWVgsS0FBWjtBQUNEOztBQUVERSxZQUFRQSxNQUFNVSxNQUFOLENBQWFkLFVBQVVFLFFBQVFBLE1BQU1PLEtBQU4sQ0FBWUosTUFBcEIsR0FBNkIsQ0FBdkMsQ0FBYixDQUFSO0FBQ0Q7QUFDRCxTQUFPRixNQUFQO0FBQ0QsQ0F6Q0Q7O0FBMkNBWSxPQUFPQyxPQUFQLEdBQWlCbEIsUUFBakIiLCJmaWxlIjoidG9rZW5pemUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7XHJcbiAgVE9LRU5fVFlQRV9UQUdfQkVHSU4sXHJcbiAgVE9LRU5fVFlQRV9UQUdfRU5ELFxyXG4gIFRPS0VOX1RZUEVfVEFHX0NPTVBBQ1QsXHJcbiAgVE9LRU5fVFlQRV9FU0NBUEUsXHJcbn0gPSByZXF1aXJlKFwiLi9jb25zdGFudHNcIik7XHJcblxyXG4vKipcclxuICogVGhpcyBmdW5jdGlvbiBpcyBzbGlnaGx5IGFkanVzdGVkXHJcbiAqIHZlcnNpb24gb2YgdGhpcyBnaXN0IGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL2Jvcmdhci80NTEzOTNcclxuICovXHJcbmNvbnN0IHRva2VuaXplID0gaW5wdXQgPT4ge1xyXG4gIGNvbnN0IG1hdGNoZXJzID0ge1xyXG4gICAgW1RPS0VOX1RZUEVfRVNDQVBFXTogLyhcXFxcXFx7fFxcXFxcXH18XFxcXFxcOykvLFxyXG4gICAgW1RPS0VOX1RZUEVfVEFHX0JFR0lOXTogLyhbYS16QS1aMC05XFwhXSspXFxzKihcXCguKlxcKSk/XFxzKihcXDopP1xccyooXFx7KS8sXHJcbiAgICBbVE9LRU5fVFlQRV9UQUdfRU5EXTogLyhcXH0pLyxcclxuICAgIFtUT0tFTl9UWVBFX1RBR19DT01QQUNUXTogLyhbYS16QS1aMC05XFwhXSspXFxzKihcXCguKlxcKSk/XFxzKihcXDspL1xyXG4gIH07XHJcblxyXG4gIGxldCBjdXJzb3IsIHJlc3VsdCwgdG9rZW4sIHRva2VucyA9IFtdO1xyXG5cclxuICB3aGlsZSAoaW5wdXQpIHtcclxuICAgIHRva2VuID0gbnVsbDtcclxuICAgIGN1cnNvciA9IGlucHV0Lmxlbmd0aDtcclxuXHJcbiAgICBmb3IgKGxldCBrZXkgaW4gbWF0Y2hlcnMpIHtcclxuICAgICAgcmVzdWx0ID0gbWF0Y2hlcnNba2V5XS5leGVjKGlucHV0KTtcclxuXHJcbiAgICAgIGlmIChyZXN1bHQgJiYgKHJlc3VsdC5pbmRleCA8IGN1cnNvcikpIHtcclxuICAgICAgICB0b2tlbiA9IHtcclxuICAgICAgICAgIHZhbHVlOiByZXN1bHRbMF0sXHJcbiAgICAgICAgICB0eXBlOiBrZXksXHJcbiAgICAgICAgICBtYXRjaGVzOiByZXN1bHQuc2xpY2UoMSlcclxuICAgICAgICB9XHJcbiAgICAgICAgY3Vyc29yID0gcmVzdWx0LmluZGV4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGN1cnNvcikge1xyXG4gICAgICB0b2tlbnMucHVzaCh7XHJcbiAgICAgICAgdmFsdWU6IGlucHV0LnN1YnN0cigwLCBjdXJzb3IpLFxyXG4gICAgICAgIHR5cGU6ICd1bmtub3duJ1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodG9rZW4pIHtcclxuICAgICAgdG9rZW5zLnB1c2godG9rZW4pO1xyXG4gICAgfVxyXG5cclxuICAgIGlucHV0ID0gaW5wdXQuc3Vic3RyKGN1cnNvciArICh0b2tlbiA/IHRva2VuLnZhbHVlLmxlbmd0aCA6IDApKTtcclxuICB9XHJcbiAgcmV0dXJuIHRva2VucztcclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gdG9rZW5pemU7Il19
},{"./constants":1}]},{},[2])