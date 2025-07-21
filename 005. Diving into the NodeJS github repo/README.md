# Diving into the NodeJS GitHub repo

<div align="center">
<img src="https://opengraph.githubassets.com/ef2685b923460da12fdd51c5a41af12daad7bbacda7f0d7b0c2fb4f4f8423462/nodejs/node" />
</div>

In Node.js, each JavaScript file (or module) is treated as a separate module. When you import or require a module from another file, Node.js wraps the entire code of the file into a special function. This is known as the **module wrapper function.**

* `require('./path')`
* All the code of the modules is wrapped inside a function (IIFE)
* **IIFE** - Immediately Invoked Function Expression
* Keeps Functions and variables safe

```js
(function() {
    // ALL CODE OF THE MODULE RUNS INSIDE HERE
})();
```

## ⭐ IIFE - Immediately Invoked Function Expression

* IIFE stands for Immediately Invoked Function Expression.

* It's a function that runs immediately after it’s defined, without needing to be called later.

* The code inside the Function will not interfere

### ❓Question: How are variables and functions are private in different module ?

* IIFE and `require` statement 

### ❓ How to get access to `module.exports`

* NodeJS passes module as a parameter to the IIFE 

```js
(function(module, require) {

})()
```

## ⭐ `require(/path)`

#### 1. Resolving the Module 
    
* `./localpath`

* `.JSON`
* `node: module`

#### 2. Loading the Module 

* file content is loaded according to file type 

#### 3. Wraps inside IIFE

#### 4. Evaluation 

* `module.exports`

#### 5. Caching  

---

```js
let wrap = function(script) { // eslint-disable-line func-style
  return Module.wrapper[0] + script + Module.wrapper[1];
};

const wrapper = [
  '(function (exports, require, module, __filename, __dirname) { ',
  '\n});',
];
```

### ✨ Caching 

* The code inside the `require` run only once.

* If same modules imported more than once in another module with `require`. The executable content inside the imported module such as `console.log` will run single time. 

* This is efficient way of running the application by caching