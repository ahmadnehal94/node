const result = require("./app");
//const fs = require("fs");
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
/*
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
*/
/*
const fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname, "crud");

console.log(dirPath);
*/

/* Lecture 16 Promices*/
/*
let x = 100;
let y = 0;

console.log(x + y);

setTimeout(() => {
  y = 200;
}, 3000);

let z = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(200);
  });
});

z.then((data) => {
  y = data;
  console.log(x + y);
});

*/

/*Lec 18 Express JS*/
/*
const express = require("express");
const app = express();

app.get("", (req, res) => {
  res.send("Welcome to Home page");
});

app.get("/about", (req, res) => {
  res.send("This is about Page");
});
app.get("/help", (req, res) => {
  res.send("This is help Page");
});

app.listen(2000);
*/

/*Lec 19 Routing Params*/
const express = require("express");
const app = express();

app.get("", (req, res) => {
  res.send("Hello...." + req.query.name);
  console.log("name = ", req.query.name);
});

app.listen(2000);
