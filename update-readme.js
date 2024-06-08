import fs from "fs";
// scan all file inside folder results, get the file name and order by the file name desc
const files = fs.readdirSync("./results").sort((a, b) => b.localeCompare(a));
// read the content of first file
const content = fs.readFileSync(`./results/${files[0]}`, "utf8");

const readme = fs.readFileSync("README.md", "utf8");
const start = "<!-- start -->";
const end = "<!-- end -->";
const startIdx = readme.indexOf(start);
const endIdx = readme.indexOf(end);
const section = readme.slice(startIdx, endIdx + end.length);
// // replace any content inside the section with the new content
const newSection = start + "\n```\n" + content + "```\n" + end;
//
// // Replace section in README.md
const newReadme = readme.replace(section, newSection);
fs.writeFileSync("README.md", newReadme);

process.exit();
