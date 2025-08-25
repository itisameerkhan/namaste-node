# LIBUV AND EVENT LOOP

![demo](https://miro.medium.com/v2/resize:fit:1400/1*v6jmTRDU2qG4j5UtniYf-Q.png)

## ⭐ Event Loop

The event loop is the core mechanism that handles asynchronous operations in Node.js. It ensures non-blocking I/O by offloading tasks like:

* File system operations (`fs.readFile`)

*  Network requests (`http.get`)
*  Timers (`setTimeout`, `setInterval`)
*  Process operations (`process.nextTick`, `setImmediate`)

Even though JavaScript is single-threaded, the event loop allows Node.js to perform tasks in the background asynchronously.

* libuv is a C++ library that provides the event loop and thread pool to handle asynchronous tasks in Node.js.

* It is responsible for handling I/O operations using multiple threads, even though Node.js runs JavaScript in a single thread.

![demo](../assests/demo12.png)

```js
const a = 100;

setImmediate(() => console.log("setImmediate"));

fs.readFile("./file.txt", "utf8", () => {
    console.log("file reading CB");
});

setTimeout(() => console.log("time expired"), 0);

function printA() {
    console.log("a =", a);
}

printA();

console.log("Last line of the file");
```

### output

```
a = 100
Last line of the file
timer expired
setImmediate
file reading CB
```

-----

```js
const a = 100;

setImmediate(() => console.log("setImmediate"));

Promise.resolve(() => console.log("promise"))

fs.readFile("./file.txt", "utf8", () => {
    console.log("file reading CB");
});

setTimeout(() => console.log("timer expired"), 0);

process.nextTick(() => console.log("process.nextTick"));

function printA() {
    console.log("a =", a);
}

printA();

console.log("Last line of the file");
```

### output 

```
a = 100
Last line of the file 
process.nextTick()
Promise
timer expired
setImmediate
File reading CB
```

```js
setImmediate(() => console.log("setImmediate"));

setTimeout(() => console.log("timer expired"), 0);

Promise.resolve(() => console.log("promise"))

fs.readFile("./file.txt", "utf8", () => {

    setTimeout(() => console.log("2nd timer"), 0);

    process.nextTick(() => console.log("2nd nextTick"));

    setImmediate(() => console.log("2nd setImmediate"));

    console.log("file reading CB");
});


process.nextTick(() => console.log("nextTick"));

console.log("Last line of the file");
```

### output 

```
last line of the file 
nextTick
promise
timer expired
setImmediate
file reading CB
2nd nextTick
2nd setImmediate
2nd timer 
```

## ⭐ EVENT LOOP WAITS IN POLL WHEN ITS IDLE    

* If the event loop is idle, it will just wait in the poll phase until the callback is ready.

* Once ready, it executes the callback.

![demo](https://miro.medium.com/1*VUJqd6fMDEuLjIiXO3Uz0A.png)