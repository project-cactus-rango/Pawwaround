require("dotenv").config();
const express = require("express"),
  massive = require("massive"),
  session = require("express-session"),
  userCtrl = require("./Controller/userController"),
  { SERVER_PORT, SESSION_SECRET, DB_STRING } = process.env,
  app = express(),
  path = require("path");

app.use(express.json());

app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: { maxAge: 1000 * 60 * 60 * 24 },
  })
);

//connection to Database
massive({
  connectionString: DB_STRING,
  ssl: { rejectUnauthorized: false },
}).then(db => {
  app.set("db", db);
  console.log("DB Connected");
});

//user endpoints
app.post("/user/register", userCtrl.register);
app.post("/user/login", userCtrl.login);
app.get("/user/logout", userCtrl.logout);

app.listen(
  SERVER_PORT,
  console.log(`Server sprinting on ${SERVER_PORT}, okie dokie!`)
);
