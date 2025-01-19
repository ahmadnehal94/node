const result = require("./app");
const fs = require("fs");
/*
const greeting = (req, res) => {
  res.writeHead(200, { "Content-type": "applicationjson" });
  res.write(JSON.stringify(result.data));
  res.write(result.name);
  res.end();
};
const http = require("http");
http.createServer(greeting).listen(2000);

const input = process.argv;

if (input[2] == "add") {
  fs.writeFileSync(input[3], input[4]);
} else if (input[2] == "rm") {
  fs.unlinkSync(input[3]);
} else {
  console.log("invalid command...");
}

*/

const path = require("path");
const dirPath = path.join(__dirname, "files", "xfile");
console.log(dirPath);

for (i = 0; i < 5; i++) {
  fs.writeFileSync(`${dirPath}/Test${i}.txt`, "Hello Dir");
}

//Red files

fs.readdir(dirPath, (err, file) => {
  //console.log(file);
  file.forEach((i) => {
    console.log("file...", i);
  });
});
