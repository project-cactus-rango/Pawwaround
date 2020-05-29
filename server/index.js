require("dotenv").config();
const express = require("express"),
  massive = require("massive"),
  session = require("express-session"),
  userCtrl = require("./Controller/userController"),
  eventCtrl = require("./Controller/eventController"),
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

//event endpoints
app.post("/api/event", eventCtrl.createEvent);
app.get("/api/event/:id", eventCtrl.getUserEvent);
app.delete("/api/event/:id", eventCtrl.deleteEvent);
app.put("/api/event/:id", eventCtrl.updateEvent);
app.get("/api/event", eventCtrl.getAllEvents);

app.use(express.static(__dirname + "/../build"));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build/index.html"));
});
app.listen(
  SERVER_PORT,
  console.log(`Server sprinting on ${SERVER_PORT}, okie dokie!`)
);
