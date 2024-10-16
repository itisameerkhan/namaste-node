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

### ❓Question: How are variablesand functions are private in different module ?

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