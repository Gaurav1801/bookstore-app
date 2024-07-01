const express = require('express')
const router = express.Router();
const User = require('./../models/user');

router.post('/signup', async(req, res) => {
    try {

        const data = req.body;
        const alreadyuser = await User.find({ email: data.email });
        // console.log(alreadyuser.length)
        if (alreadyuser.length > 0) {
            return res.status(500).json({ error: "user Already exist" });
        }

        const newUser = new User(data);
        const response = await newUser.save();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ error: "internal error" })
    }

})
router.post('/login', async(req, res) => {
    try {

        const { email, password } = req.body;
        const user = await User.findOne({ email: email })
        if (!user || !(await user.comparePassword(password))) {
            return res.status(401).json({ error: "Invalid username or password" })
        }
        res.status(200).json({ message: "login successsfully", user })

    } catch (error) {
        res.status(500).json({ error: "internal error" })
    }

})

module.exports = router;