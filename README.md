# bracel
HTML transpiler allowing you to write your HTML more like you write your JavaScript.

## Try it out
[https://martyzz.github.io/bracel/](https://martyzz.github.io/bracel/)


## Instalation
```
$ npm install -g bracel
$ bracel --help
```

## Syntax

The idea is that paired HTML tags are be represented as a function scopes and unpaired HTML tags are represented as expressions (ending with semicolon).

Input file `index.bracel`:

```
html(lang="en") {
  head {
    meta(charset="utf-8");
  }
  body {
    p {
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    }
  }
}
```

Using:

```
$ bracel --input index.bracel --output index.html
```

Transpiles to output file `index.html`:

```
<html lang="en">
  <head>
    <meta charset="utf-8">
  </head>
  <body>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>
  </body>
</html>
```

### Paired tags
Name of the tag followed by optional set of parentheses containing arguments and set of curly braces containing content of the tag.

_Whitespaces after tag name and after optional arguments are allowed in paired tags._

One line:
```
html { }

  ↓

<html> </html>
```

Multi line:
```
html {
}

  ↓

<html>
</html>
```

Nested:
```
html {
  body {
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  }
}

  ↓

<html>
  <body>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  </body>
</html>
```

Inside text:
```
Lorem ipsum b {dolor} sit amet, consectetur adipiscing elit.

  ↓

Lorem ipsum <b>dolor</b> sit amet, consectetur adipiscing elit.
```

Arguments:
```
div(id="test" style="color: red") {
}

  ↓

<div id="test" style="color: red">
</div>
```

### Unpaired tags
Name of the tag followed by optional set of parentheses containing arguments and semicolon at the end.

_Whitespaces after tag name and after optional arguments are allowed in unpaired tags._


```
head {
  meta(charset="utf-8");
  link(rel="stylesheet" href="style.css");
}

  ↓

<head>
  <meta charset="utf-8">
  <link rel="stylesheet" href="style.css">
</head>
```

### Escaping characters
If you want to write for example definition of unpaired tag in bracel but you don't want bracel to transpile it, you can escape characters like this:
```
head {
  meta(charset="utf-8")\;
}

  ↓

<head>
  meta(charset="utf-8");
</head>
```
Possible characters to escape are `\;`, `\{` and `\}`.

### Escaping blocks
If you are creating a script block for example and you don't want contents of the script to be treated as bracel syntax, you can escape whole block using `:` before opening curly brace of the tag.
```
body {
  script :{
    function test() {
      console.log('Hello!');
    }
  }
}

  ↓

<body>
  <script>
    function test() {
      console.log('Hello!');
    }
  </script>
</body>
```

With arguments:

```
body {
  script(type="text/javascript") :{
    function test() {
      console.log('Hello!');
    }
  }
}

  ↓

<body>
  <script type="text/javascript">
    function test() {
      console.log('Hello!');
    }
  </script>
</body>
```

## Usage with Gulp
There is no `gulp-bracel` plugin yet, temporary usage with Gulp:
```
const gulp = require("gulp");

const transform = require("gulp-transform");
const rename = require("gulp-rename");
const bracel = require("bracel");

gulp.task("transpile:html", () => {
  return gulp.src("./src/**/*.bracel")
    .pipe(transform("utf8", input => bracel(input)))
    .pipe(rename({ extname: ".html" }))
    .pipe(gulp.dest("./dist/"));
});
```

## Roadmap
- Finding out if somebody actually likes this syntax

## License
MIT