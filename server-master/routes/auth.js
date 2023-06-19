const router = require("express").Router();
const User = require("../models/User.js");

// router.post("/register", async (req, res) => {
//     try {
//         const { username, email, userID, password } = req.body;
//         // console.log(req.body);
//         const newUser = new User({
//             username,
//             email,
//             userID,
//             password,
//         });

//         const user = await newUser.save();
//         res.status(200).json({ message: "user has been created !", user });

//     } catch (err) {
//         res.status(500).json({ "Error": err.message });
//     }

// })

router.post("/auth/login", async (req, res) => {
    try {
        //checking if user exist 
        const user = await User.findOne({ email: req.body.email });
        if (!user) return res.status(400).json("NO USER");

        if (user.password !== req.body.password)
            return res.status(400).json("INCORRECT PASSWORD");

        res.status(200).json({ message: user });

    } catch (err) {
        res.status(500).json({ "Error": err.message });
    }
})

// router.get("/auth", async (req, res) => {
//     try {
//         res.status(200).json({ message: "Successfull" });

//     } catch (err) {
//         res.status(500).json({ "Error": err.message });
//     }
// })
module.exports = router;