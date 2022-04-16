const { Router } = require("express");
const router = Router();

const User = require("../../models/User");
const jwt = require("../../utils/jwt");
const config = require("../../config");
const { check, validationResult } = require("express-validator");

/* The above code is a POST request to the server. It is sending the data from the form to the server. */
router.post(
    "/api/register", [
        check("name", "Please enter a valid name").not().isEmpty(),
        check("email", "Please enter a valid email address").isEmail(),
        check(
            "password",
            "Please enter a valid password with 6 or more chars"
        ).isLength({ min: 6 }),
    ],
  /* This is a function that is checking if the user exists in the database. If it does, it will return
  an error message. If it doesn't, it will create a new user. */
    async(req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        console.log(req.body);
        const { name, email, password } = req.body;
        console.log(email);
        res.status(200);
        // res.render('login');
        //1-make sure its not on db
        //2-compare with pass
        //3-if pass is correct then take him to (home or profile)
      
        try {
            let user = await User.findOne({ email });

            if (user) {
                return res
                    .status(400)
                    .json({ errors: [{ msg: "user already exists" }] });
            } else {
                user = await User.create({ email, name, password });
            }
            // const token = jwt.createToken(user._id);
             res.json({ mss:"user was registered successfully"});
        } catch (err) {
            console.log(err);
            return res
                .status(500)
                .json({ errors: [{ msg: "something went wrong!!" }] });
        }
    }
);

module.exports = router;