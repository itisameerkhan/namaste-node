# Creating our Express Server 

![demo](https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/4094105/cover_image/retina_1708x683/0630_Express.js_Promise-based_Routes_and_Error_Handling_Zara_Newsletter___blog-56d2bd028ebfba06eda4e06be67228d3.png)

###  ⚡Initialise the App

```cmd
npm init
```

### ⚡Installing Express

```cmd
npm i express
```

### ⚡ we will get `node_modules` and `package-lock.json`

![demo](../assests/demo23.png)

---

### ⚡ `package.json`

* **Project metadata** → name, version, description, author, license, etc.

* **Scripts** → commands like npm start, npm test.

* **Dependencies** → libraries your app needs to run.

* **DevDependencies** → libraries only needed for development (like testing tools).

### ⚡ `package-lock.json`

* When you install any package, npm creates/updates a file called package-lock.json.

* Records the exact version of every installed dependency (and its sub-dependencies).

* Ensures consistency across environments (if you or your teammates install the project later, you’ll all get the same versions).

* Optimizes performance by allowing npm to skip re-resolving versions.

![demo](https://preview.redd.it/tfugj4n3l6ez.png?auto=webp&s=b8163176d8482d5e78ac631e16b7973a52e3b188)

### ⚡ What is `^` caret meaning

```json
"dependencies": { "express": "^5.1.0" }
```

* The caret (`^`) in npm versioning is a semantic versioning (semver) range operator.

* A version like `5.1.0` follows

```cmd
MAJOR.MINOR.PATCH
```

* **MAJOR** → breaking changes (5 → 6 means old code may break).

* **MINOR** → new features, backward compatible (5.1 → 5.2).

* **PATCH** → bug fixes only (5.1.0 → 5.1.1).


#### 📌 What `^` means

`^5.1.0` → means allow anything from `5.1.0` up to (but not including) `6.0.0`.

So it can install:

* `5.1.0` ✅

* `5.1.2` ✅

* `5.5.0` ✅

But not `6.0.0` ❌ (major version bump).

#### 📌 What `~` means

```json
"express": "~5.1.0"
```

Allow upgrades for PATCH versions only, not MINOR.

So it will install:

* **`5.1.0`** ✅

* **`5.1.1`** ✅

* **`5.1.9`** ✅

But not **5.2.0** ❌ (because that’s a new MINOR version).

## ⭐ CREATING A SERVER 

```js
const express = require("express");

const app = express();

app.listen(8080, () => {
    console.log(`SERVER IS LISTENING TO PORT: http://localhost:8080`);
})

app.use((req, res) => {
    res.send("HELLO FROM SERVER")
})
```

```js
const app = express();
```

* Here we call the `express()` function.

* This creates an Express application object (`app`) which we’ll use to handle requests and define routes.

* Think of `app` as your server instance.


```js
app.listen(8080, () => {
    console.log(`SERVER IS LISTENING TO PORT: http://localhost:8080`);
})
```

* `app.listen(8080, ...)` starts the server on port 8080.

* The second argument is a callback function that runs once the server starts successfully.

```js
app.use((req, res) => {
    res.send("HELLO FROM SERVER")
})
```

* `app.use(...)` defines middleware for handling all incoming requests.

* Here it takes a function `(req, res)` that runs whenever a request is received.

* `req` = request object (info about the incoming request like URL, headers, etc).

* `res` = response object (used to send data back to the client).

* `res.send("HELLO FROM SERVER")` sends the text "HELLO FROM SERVER" back to the browser or API client.