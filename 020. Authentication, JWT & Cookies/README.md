# Authentication, JWT & Cookies

![demo](https://media.licdn.com/dms/image/v2/D4E12AQF4F-iUG11R4g/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1679512575354?e=2147483647&v=beta&t=A6b601Z3J8VV_eMnUN9aDmb0UOyF7peLBbTAAIZbceo)

### ⚡ How to send cookies from server to postman

```js
res.cookie(name, value, [options]);
```

**Parameters:**

- `name` – The name of the cookie.

- `value` – The value of the cookie (can be a string, object, or number).
- `options` (optional) – An object that specifies additional settings.

```js
res.cookie("token", "2r23r23r23maybeyourtoken");
```

- used to set cookies on the client’s browser

- It allows you to store small pieces of data on the client’s machine, which can be useful for maintaining sessions, authentication, or user preferences.

---

### ⚡ Reading Cookies from client

if you want to read cookies from the client (frontend / postman), we need to parse it before reading it. for that we need to install `cookie-parser`

```cmd
npm i cookie-parser
```

```js
import cookieParser from "cookie-parser";

app.use(cookieParser());
```

now we can able to read cookies from frontend

```js
import cookieParser from "cookie-parser";

app.use(cookieParser());

app.get("/api/profile", async (req, res) => {
  const cookies = req.cookies;
});
```

**if cookies present**

```cmd
{ token: 'asaqwff24g24g24g24g4g24g34g34g' }
```

**if cookies not present**

```cmd
[Object: null prototype] {}
```

---

## ⭐ JWT Token

A JWT (JSON Web Token) is a compact, self-contained way to securely transmit information between parties as a JSON object. It is commonly used for authentication and authorization in web applications.

```
HEADER.PAYLOAD.SIGNATURE
```

```js
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
  .eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0
  .KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp - QV30;
```

### ⚡ creation of token

```
npm i jsonwebtoken
```

```js
import jwt from "jsonwebtoken";

app.get("/api/login", async (req, res) => {
  const token = jwt.sign(
    {
      data: "somedata",
      name: "something",
    },
    "secret-key"
  );
});
```

### ⚡ create cookies and send back to client(frontend)

```js
import jwt from "jsonwebtoken";

app.get("/api/login", async (req, res) => {
  const token = jwt.sign(
    {
      data: "data",
      name: "name",
    },
    "secret-key"
  );

  res.cookie("token", token);

  res.json({
    success: true,
    message: "token created and sent successfully",
  });
});
```

---

### ⚡ Verify JWT token 

```js
import jwt from "jsonwebtoken";

app.get("/api/verify", async(req, res) => {

    const cookies = req.cookies;
    const { token } = cookies;

    const decodedValue = jwt.verify(token, "secret-key");
})
```

### ⚡ Middleware for Authentication using jsonwebtoken

```js
import jwt from "jsonwebtoken";
import { User } from "../models/user.js";

export const userAuth = async (req, res, next) => {
  try {
    const cookies = req.cookies;

    const { token } = cookies;

    if (!token) {
      throw new Error("invalid token");
    }

    const decodedObj = jwt.verify(token, "secret-key");
    const { _id } = decodedObj;

    const user = await User.findById(_id);
    if (!user) {
      throw new Error("user does not exist");
    }

    req.user = user;
    
    next();

  } catch (e) {
    res.status(400).json({
      success: false,
      message: "something went wrong",
      error: e.message,
    });
  }
};
```

### ⚡ Schema level token validation

```js
userSchema.methods.getJWT = async function() {

  const user = this;
  const token = jwt.sign({_id: user._id}, "secret-key", {
    expiresIn: "7d"
  });

  return token;
}
```

#### validating password

```js
userSchema.methods.validatePassword = async function(inputPassword) {
  return await bcrypt.compare(inputPassword, this.password);
}
```