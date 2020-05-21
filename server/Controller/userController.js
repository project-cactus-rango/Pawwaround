const bcrypt = require("bcryptjs");

module.exports = {
  register: async (req, res) => {
    const { email, password, firstName, lastName } = req.body,
      db = req.app.get("db");

    const existingUser = await db.users.check_user(email);
    if (existingUser[0]) {
      return res.status(400).send({
        message: "Email Already In Use",
      });
    }

    let salt = bcrypt.genSaltSync(10);
    let hash = bcrypt.hashSync(password, salt);
    const newUser = await db.users.register_user(
      email,
      hash,
      firstName,
      lastName
    );

    delete newUser[0].password;
    req.session.user = newUser[0];
    res.status(201).json(req.session.user);
  },
  login: async (req, res) => {
    const { email, password } = req.body,
      db = req.app.get("db");

    let existingUser = await db.users.check_user(email);
    if (!existingUser[0]) {
      return res.status(400).send({
        message: "Incorrect email or password",
      });
    }

    const verified = bcrypt.compareSync(password, existingUser[0].password);
    if (!verified) {
      return res.status(400).send({
        message: "Incorrect email or password",
      });
    }

    delete existingUser[0].password;
    req.session.user = existingUser[0];
    res.status(202).json(req.session.user);
  },
  logout: (req, res) => {
    req.session.destroy();
    res.sendStatus(200);
  },
};
