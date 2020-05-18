const bcrypt = require('bcryptjs')

module.exports = {
    register: async(req, res) => {
        const {email, password, firstName, lastName} = req.body,
            db = req.app.get('db')

        const existingUser = await db.users.check_user(email)
            if(existingUser[0]){
                return res.status(400).json('Email currently in use')
            }

        let salt = bcrypt.genSaltSync(10)
        let hash = bcrypt.hashSync(password, salt)
        const newUser = await db.users.register_user(email, hash, firstName, lastName)

        delete newUser[0].password
        req.session.user = newUser[0]
        res.status(201).json(req.session.user)
    }
}