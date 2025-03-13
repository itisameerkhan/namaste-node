# Encrypting Passwords

### ✨ Password hashing

```cmd
npm i bcrypt
```

```js
const passwordHashFunction = async() => {
    const password = "Password@123";
    const passwordHash = await bcrypt(password, 10);

    console.log(passwordHash);
}
```

### ✨ compare password 

```js
const comparePassword = async() => {
    const isValidPassword = await bcrypt.compare(password, hashedPassword);

    // returns boolean
}
```