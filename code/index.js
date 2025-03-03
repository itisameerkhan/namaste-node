const fs = require("fs");
const https = require("https");
const crypto = require("crypto");

console.log("hello world");

var a = 10;
var b = 20;

const addFunction = (a, b) => {
  return a + b;
}

https.get('https://fakestoreapi.com/products/1', (res) => {
  console.log("data fetched successfully");
});

setTimeout(() => {
  console.log("im timer");
}, 5000);

fs.readFile("./file.txt", "utf8", (err, data) => {
  console.log(data);
})

const result = addFunction(a, b);
console.log(result);
