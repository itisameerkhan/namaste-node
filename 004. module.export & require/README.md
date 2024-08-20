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
