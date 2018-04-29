#!/usr/bin/env node
const bracel = require("./bracel");

if (require.main !== module) {
    module.exports = bracel;
    return;
}

const commandLineArgs = require("command-line-args");
const commandLineUsage = require("command-line-usage");
const fs = require("fs");

const optionDefinitions = [
  { name: "input", alias: "i", type: String },
  { name: "output", alias: "o", type: String },
  { name: "help", alias: "h", type: Boolean }
];

const options = commandLineArgs(optionDefinitions);

if (options.help) {
  const sections = [
    {
      header: "bracel",
      content: "HTML transpiler allowing you to write your HTML more like you write your JavaScript."
    },
    {
      header: "Options",
      optionList: [
        {
          name: "input",
          typeLabel: "{underline file}",
          description: "File containing bracel syntax."
        },
        {
          name: "output",
          typeLabel: "{underline file}",
          description: "File containing generated HTML."
        },
        {
          name: "help",
          description: "Print this usage guide."
        }
      ]
    }
  ]
  const usage = commandLineUsage(sections)
  console.log(usage)
  return;
}

const input = fs.readFileSync(options.input, { encoding: "utf8" });
const output = bracel(input);
fs.writeFileSync(options.output, output, { encoding: "utf8" });