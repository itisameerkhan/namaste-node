# Routing and Request Handlers

![demo](https://miro.medium.com/v2/resize:fit:1400/1*yVx8vE5YDb7Sds6YRmEBgQ.png)

### ⚡ consider this example

```js
const express = require("express");

const app = express();

app.listen(8080, () => {
    console.log(`SERVER IS LISTENING TO PORT: http://localhost:8080`);
})

app.use("/",(req, res) => {
    res.send("/ FROM SERVER")
});

app.use("/home",(req, res) => {
    res.send("HOME")
})

app.use("/cart",(req, res) => {
    res.send("CART")
})
```

### INPUT 

```
http://localhost:8080/

http://localhost:8080/home

http://localhost:8080/something

http://localhost:8080/something/something
```

### OUTPUT

```
/ FROM THE SERVER

/ FROM THE SERVER

/ FROM THE SERVER

/ FROM THE SERVER
```

* The reason `/home` and `/cart` overlap with `/` in your code is because of how `app.use()` works in Express.

* `app.use(path, handler)` matches any request that starts with that path.

* It’s not an exact match unless you use methods like `app.get()`, `app.post()`

* The path is `/`

* `/home` starts with `/`

* `/cart` also starts with `/`

* So when a request comes to `/home` or `/cart`, Express sees that `/` matches first and executes that handler immediately, sending a response — which ends the request before it ever reaches `/home` or `/cart`.

---

### 📌 CONSIDER THIS EXAMPLE 

```js
app.use("/home",(req, res) => {
    res.send("HOME")
})

app.use("/cart",(req, res) => {
    res.send("CART")
})
```

### INPUT 

```
http://localhost:8080/home

http://localhost:8080/home/something

http://localhost:8080/home123
```

### OUTPUT 

```
HOME

HOME

cannot GET /home123
```

---

### 📌 CONSIDER THIS EXAMPLE

```js
app.use("/home",(req, res) => {
    res.send("HOME")
})

app.use("/cart",(req, res) => {
    res.send("CART")
})

app.use("/",(req, res) => {
    res.send("/ FROM SERVER")
});
```

### INPUT 

```
http://localhost:8080/

http://localhost:8080/home
```

### OUTPUT

```
/ FROM SERVER 

HOME
```

---

# HTTP METHODS


When we talk about **HTTP methods in Node.js**, we’re usually talking about the methods defined by the **HTTP protocol** (not specific to Node.js, but used inside it).

These methods tell the server **what kind of action** the client (browser, app, etc.) wants to perform on a resource (like `/users`, `/cart`, etc.).

---

### Common HTTP Methods:

1. **GET**

   * Used to **retrieve** data from the server.
   * Example: `GET /products` → fetch list of products.
   * No request body, usually just query parameters.

2. **POST**

   * Used to **send data** to the server to create something new.
   * Example: `POST /users` → create a new user with the data in the request body.

3. **PUT**

   * Used to **update/replace** an existing resource completely.
   * Example: `PUT /users/5` → replace user with ID 5 with new data.

4. **PATCH**

   * Similar to PUT, but only **partially updates** the resource.
   * Example: `PATCH /users/5` → update just the email of user 5.

5. **DELETE**

   * Used to **remove** a resource.
   * Example: `DELETE /users/5` → delete user with ID 5.

---

### How they work in **Node.js with Express**:

You map each method to a route:

```js
const express = require("express");
const app = express();

app.get("/items", (req, res) => {
  res.send("Fetch items"); // GET request
});

app.post("/items", (req, res) => {
  res.send("Create item"); // POST request
});

app.put("/items/:id", (req, res) => {
  res.send("Replace item " + req.params.id); // PUT request
});

app.patch("/items/:id", (req, res) => {
  res.send("Update item " + req.params.id); // PATCH request
});

app.delete("/items/:id", (req, res) => {
  res.send("Delete item " + req.params.id); // DELETE request
});
```

---

⚡ In short:

* **GET** → Read
* **POST** → Create
* **PUT** → Replace
* **PATCH** → Update partially
* **DELETE** → Remove
---

### 📌 CONSIDER THIS EXAMPLE

```js
const express = require("express");

const app = express();

// This will only handle GET call to /user
app.get("/user", (req, res) => {
    res.send({firstName: "Ameer", lastName: "Khan"})
})

// this will match all the HTTP method API calls to /test
app.use("/test", (req, res) => {
    res.send("hello from the server");
})
```

### ⚡ Passing query parameters

```
http://localhost:8080/user?userId=123&name=amee
```

### ⚡ Params

```js
app.use("/user/:userId", (req, res) => {
    const params = req.params;
})
```

---

### routing 

### 1. `?` → **Optional**

* The preceding character or group is **optional** (appears 0 or 1 time).

```js
app.get("/ab?c", (req, res) => res.send("matched"));
```

Matches:

* `/abc` ✅
* `/ac` ✅
  Doesn’t match `/abbc`.

---

### 2. `*` → **Wildcard (0 or more of anything)**

* Matches **anything** in that spot.

```js
app.get("/ab*c", (req, res) => res.send("matched"));
```

Matches:

* `/ac` ✅
* `/abc` ✅
* `/abbbbbc` ✅
* `/abXYZ123c` ✅

---

### 3. `+` → **One or more**

* The preceding character must appear **at least once**.

```js
app.get("/ab+c", (req, res) => res.send("matched"));
```

Matches:

* `/abc` ✅
* `/abbc` ✅
* `/abbbbbc` ✅
  Doesn’t match `/ac` ❌ (needs at least one `b`).

---

### 4. `()` → **Grouping**

* Groups parts together so the modifier applies to the whole group.

```js
app.get("/a(bc)?d", (req, res) => res.send("matched"));
```

Matches:

* `/ad` ✅
* `/abcd` ✅
  Doesn’t match `/abc` ❌ (needs the `d`).


