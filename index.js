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
/*
const express = require("express");
const app = express();

app.get("", (req, res) => {
  res.send("Hello...." + req.query.name);
  console.log("name = ", req.query.name);
});

app.listen(2000);

*/

/*Lec 20 Render HTML a7 JSON*/

/*
const express = require("express");
const app = express();

app.get("", (req, res) => {
  res.send("<h1> This is Home</h1><br> <a href='/about'>Go to About Page</a>");
});

app.get("/about", (req, res) => {
  res.send("[{name:'nehal', age:28},{name:'ahmad', age:21}]");
});

app.get("/html", (req, res) => {
  res.send(
    `<input type="text" placeholder="enter name" value=${req.query.name} />
    <br>
    <a href="/">Go to home page</a>
    `
  );
});
app.listen(2000);

*/

/* Lec 30 Connet Mongo DB with Node*/
const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
const database = "e_comm";
const client = new MongoClient(url);

async function getData() {
  let result = await client.connect();
  let db = await result.db(database);
  let collection = await db.collection("products");
  let response = await collection.find({}).toArray();
  console.log(response);
}

getData();
