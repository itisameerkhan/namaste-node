# MODULE.EXPORT & REQUIRE

## ⭐ Importing and Exporting in NodeJS

To import a function from a module, use the `require` function. Here's an example:

```js
//xyz.js

console.log("message from xyz")
```

```js
// app.js

require("./xyz.js");

console.log("message from app.js");
```

#### 💻 Output
```cmd
message from xyz
message from app.js
```

---

### ⚡Importing a function from another module

```js
// sum.js

function calculateSum(a, b) {
  const sum = a + b;
  console.log(sum);
}
```

```js
// app.js

require("./sum.js");

console.log("message from app")
calculateSum(10,20);
```

#### 💻 Output

```cmd
calculateSum(10,20);
^

ReferenceError: calculateSum is not defined
```

---


```js
// sum.js

console.log("sumjs module executing");

function calculateSum(a, b) {
  const sum = a + b;
  console.log(sum);
}
```

```js
// app.js

require("./sum.js");

console.log("message from app")
calculateSum(10,20);
```

#### 💻 Output

```cmd
sumjs module executing

calculateSum(10,20);
^

ReferenceError: calculateSum is not defined
```

> [!NOTE]
> we cannot simply import function from one module to another module simply by `require`

*  **Modules protects their variables and functions from leaking.**

---

### ⚡ Exporting a Functions and variables from module

We can export functions and variables with `module.exports`

```js
// sum.js

function calculateSum(a, b) {
  const sum = a + b;
  console.log(sum);
}

module.exports = calculateSum;
```

```js
// app.js

const calculateSum = require("./sum.js");

console.log("message from app")
calculateSum(10,20);
```

#### 💻 output

```cmd
message from app
30
```

---

### ⚡ importing and exporting multiple variables and functions from modules

> [!NOTE]
> we can use variables and functions from modules with export

```js
// sum.js

function calculateSum(a, b) {
  const sum = a + b;
  console.log(sum);
}

const x = "Variable from sum.js";

module.exports = {
  x: x,
  calculateSum: calculateSum,
};
```

```js
// app.js

const obj = require("./sum.js");
// const { x, calculateSum } = require("./sum.js");

obj.calculateSum(10, 20);
console.log(obj.x);
```

#### 💻 output 

```cmd
30
Variable from sum.js
```

---

### ⚡ Destrucing an object

```js
//app.js
 
const { x, calculateSum } = require("./sum.js"); ✅
```

---

### ⚡ valid exports

```js
// sum.js

module.exports = { x, calculateSum };  ✅
```

---