# Deep Dive into V8 JS Engine

![dem0](../assests/demo8.png)

The V8 Engine is Google’s high-performance JavaScript engine, developed for Chrome but also used in Node.js to execute JavaScript on the server side. 

## ⭐ Parsing 

* Parsing is the process of converting JavaScript code into a structured format that the V8 engine can understand and execute.

### ⚡ Tokenization (Lexial Analysis)

The source code is broken down into tokens (keywords, identifiers, operators, etc.).

```js
let sum = a + b;
```

Tokens produced 

* `let` (keyword)

* `sum` (identifier)
* `=` (assignment operator)
* `a` (identifier)
* `+` (operator)
* `b` (identifier)
* `;` (terminator)


### ⚡ Abstract Syntax Tree (AST)

* The tokenized code is converted into an AST (Abstract Syntax Tree).

* The AST represents the structure and hierarchy of the JavaScript code.


```js
let sum = a + b;
```

```css
VariableDeclaration
 ├── Identifier (sum)
 ├── Assignment (=)
 ├── BinaryExpression (+)
       ├── Identifier (a)
       ├── Identifier (b)
```

![demo](../assests/demo9.png)
![demo](../assests/demo10.png)

> [!IMPORTANT]
> JS is Interpreted or compiled language
> answer: Both