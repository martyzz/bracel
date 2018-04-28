const expect = require("chai").expect;
const bracel = require("../src/bracel");

describe('bracel', () => {
  it("should transpile empty", () => {
    const input = ``;
    const expectedOutput = ``;

    const output = bracel(input);
    expect(output).to.equal(expectedOutput);
  });

  it("should transpile just text", () => {
    const input = `lorem ipsum`;
    const expectedOutput = `lorem ipsum`;

    const output = bracel(input);
    expect(output).to.equal(expectedOutput);
  });

  it("should transpile unpaired tag", () => {
    const input = `meta;`;
    const expectedOutput = `<meta>`;

    const output = bracel(input);
    expect(output).to.equal(expectedOutput);
  });

  it("should transpile unpaired tag with attributes", () => {
    const input = `meta(charset="utf-8");`;
    const expectedOutput = `<meta charset="utf-8">`;

    const output = bracel(input);
    expect(output).to.equal(expectedOutput);
  });

  it("should transpile unpaired tag with white spaces", () => {
    const input = `
      meta;
    `;

    const expectedOutput = `
      <meta>
    `;

    const output = bracel(input);
    expect(output).to.equal(expectedOutput);
  });

  it("should transpile paired tag", () => {
    const input = `html {}`;
    const expectedOutput = `<html></html>`;

    const output = bracel(input);
    expect(output).to.equal(expectedOutput);
  });

  it("should transpile paired tag with attributes", () => {
    const input = `html(lang="en") {}`;
    const expectedOutput = `<html lang="en"></html>`;

    const output = bracel(input);
    expect(output).to.equal(expectedOutput);
  });

  it("should transpile paired tag with white spaces", () => {
    const input = `
      html {

      }
    `;

    const expectedOutput = `
      <html>

      </html>
    `;

    const output = bracel(input);
    expect(output).to.equal(expectedOutput);
  });
  
  it("should transpile unpaired tag with random definition white spaces", () => {
    const input = `meta    (charset="utf-8")    ;`;
    const expectedOutput = `<meta charset="utf-8">`;

    const output = bracel(input);
    expect(output).to.equal(expectedOutput);
  });

  it("should transpile paired tag with random definition white spaces", () => {
    const input = `html    (lang="en")    {  }`;
    const expectedOutput = `<html lang="en">  </html>`;

    const output = bracel(input);
    expect(output).to.equal(expectedOutput);
  });

  it("should transpile nested paired tags", () => {
    const input = `
      html {
        body {

        }
      }
    `;

    const expectedOutput = `
      <html>
        <body>

        </body>
      </html>
    `;

    const output = bracel(input);
    expect(output).to.equal(expectedOutput);
  });

  it("should transpile combination of unpaired and nested paired tags", () => {
    const input = `
      html {
        head {
          meta(charset="utf-8");
        }
        body {

        }
      }
    `;

    const expectedOutput = `
      <html>
        <head>
          <meta charset="utf-8">
        </head>
        <body>

        </body>
      </html>
    `;

    const output = bracel(input);
    expect(output).to.equal(expectedOutput);
  });

  it("should transpile combination of unpaired tags, nested paired tags and text", () => {
    const input = `
      html {
        head {
          meta(charset="utf-8");
        }
        body {
          lorem b(style="color:red;") {ipsum}
        }
      }
    `;

    const expectedOutput = `
      <html>
        <head>
          <meta charset="utf-8">
        </head>
        <body>
          lorem <b style="color:red;">ipsum</b>
        </body>
      </html>
    `;

    const output = bracel(input);
    expect(output).to.equal(expectedOutput);
  });

  it("should transpile tags with weird characters", () => {
    const input = `!doctype(html);`;
    const expectedOutput = `<!doctype html>`;

    const output = bracel(input);
    expect(output).to.equal(expectedOutput);
  });

  it("should transpile ignore notation", () => {
    const input = `
      html {
        body {
          lorem ipsum
          script :{
            function test() {

            }
          }
        }
      }
    `;

    const expectedOutput = `
      <html>
        <body>
          lorem ipsum
          <script>
            function test() {

            }
          </script>
        </body>
      </html>
    `;

    const output = bracel(input);
    expect(output).to.equal(expectedOutput);
  });

  it("should transpile escaped characters", () => {
    const input = `
      html {
        head {
          meta(charset="utf-8")\\;
          a \\{ \\}
        }
      }
    `;

    const expectedOutput = `
      <html>
        <head>
          meta(charset="utf-8");
          a { }
        </head>
      </html>
    `;

    const output = bracel(input);
    expect(output).to.equal(expectedOutput);
  });

  it("should transpile ...everything", () => {
    const input = `
    !doctype(html);
    html(lang="en") {
      head {
        meta(charset="utf-8");
        meta(name="viewport" content="width=device-width, initial-scale=1.0");
        meta(http-equiv="X-UA-Compatible" content="ie=edge");
        title {Document}
        link(rel="stylesheet" href="css/style.css");
      }
      body {
        h1(style="color: red;") {Document}
    
        p(class="test-text1") {
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum maiores,
          delectus unde fuga corporis autem iusto aperiam dicta molestiae voluptas
          qui blanditiis pariatur expedita numquam repudiandaebeatae aliquid
          inventore fugiat.
        }
    
        hr;
    
        p(class="test-text2") {
          Lorem ipsum dolor sit amet strong(class="test-strong") {adipisicing} elit.
          consequaturvoluptatem sunt corporis quas magni dolor explicabo tenetur nam
          veniam b {voluptatibus} tempora ab alias, odio doloremque eaque qui?
        }
    
        hr;
    
        table {
          tr {
            td {
              test1
            }
            td {
              test2
            }
          }
          tr {
            td {
              test3
            }
            td {
              test4
            }
          }
        }
    
        script(type="text/javascript" src="js/script.js" async) {}
        script(type="text/javascript") :{
          function test() {
              console.log('test');
          }
    
          test();
        }
      }
    }
    `;

    const expectedOutput = `
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
        <link rel="stylesheet" href="css/style.css">
      </head>
      <body>
        <h1 style="color: red;">Document</h1>
    
        <p class="test-text1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum maiores,
          delectus unde fuga corporis autem iusto aperiam dicta molestiae voluptas
          qui blanditiis pariatur expedita numquam repudiandaebeatae aliquid
          inventore fugiat.
        </p>
    
        <hr>
    
        <p class="test-text2">
          Lorem ipsum dolor sit amet <strong class="test-strong">adipisicing</strong> elit.
          consequaturvoluptatem sunt corporis quas magni dolor explicabo tenetur nam
          veniam <b>voluptatibus</b> tempora ab alias, odio doloremque eaque qui?
        </p>
    
        <hr>
    
        <table>
          <tr>
            <td>
              test1
            </td>
            <td>
              test2
            </td>
          </tr>
          <tr>
            <td>
              test3
            </td>
            <td>
              test4
            </td>
          </tr>
        </table>
    
        <script type="text/javascript" src="js/script.js" async></script>
        <script type="text/javascript">
          function test() {
              console.log('test');
          }
    
          test();
        </script>
      </body>
    </html>
    `;

    const output = bracel(input);
    expect(output).to.equal(expectedOutput);
  });
});