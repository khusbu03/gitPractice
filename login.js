const login = async (req, res) => {
    try {

        const { email, password } = req.body;
        if (!email || !password) return res.status(400).json({ message: "Credentials missing" });

        const existingUser = await User.findOne({ emailId: email });
        if (!existingUser) return res.status(400).json({ message: "Invalid credentials" })

        return res.status(200).json({ message: "Logged In " })
    }
    catch (error) {
        return res.status(500).json({ message: "Login failed" })

    }
}

module.exports=login;
