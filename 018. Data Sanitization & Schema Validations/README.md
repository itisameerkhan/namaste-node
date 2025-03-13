# Data Sanitization & Schema Validations

### ✨ API level validation

```js
const ALLOWED_UPDATES = [
  "firstName",
  "lastName",
  "password",
  "age",
  "gender",
  "photoURL",
  "about",
  "skills",
  "phoneNumber",
];

const isUpdateAllowed = Object.keys(req.body).every((k) =>
  ALLOWED_UPDATES.includes(k)
);

if (!isUpdateAllowed) {
  throw new Error("updation not possible");
}
```

### ✨ Run validators for after updation

```js
const user = await User.findByIdAndUpdate(req.params._id, req.body, {
  runValidators: true,
});
```

### ✨ validator.js NPM

```cmd
npm i validator
```

```js
 emailId: {
    validate(value) {
        if(!validator.isEmail(value)) {
            throw new Error("invalid email")
        }
    }
},
```
