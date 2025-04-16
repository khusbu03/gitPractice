const signup = async (req, res) => {
    try {

        const { email, password } = req.body;
        if (!email || !password) return res.status(400).json({ message: "Credentials missing" });

        const existingUser = await User.findOne({ emailId: email });
        if (existingUser) return res.status(400).json({ message: "USER ALREADY EXISTS" });

      const newUser= User({email,password});
     await newUser.save();
      

        return res.status(200).json({ message: "User Registered successfully" })
    }
    catch (error) {
        return res.status(500).json({ message: "Failed to register" })

    }
}

module.exports=signup;
