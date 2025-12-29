const User = require("../models/User"); // Assuming User model is in ../models/User
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Register Route
exports.register = async (req, res) => {
  const { name, email, password } = req.body;
  console.log(req.body);
  try {
    // Check if user already exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ errors: [{ msg: "User already exists" }] });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Save new user
    user = new User({ name, email, password: hashedPassword });
    await user.save();

    // Generate JWT
    const payload = { user: { id: user.id } };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(201).json({ token, user: { id: user.id, email: user.email } });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// Login Route
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(401)
        .json({ errors: [{ msg: "Invalid email or password" }] });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(401)
        .json({ errors: [{ msg: "Invalid email or password" }] });
    }

    // Generate JWT
    const payload = { user: { id: user.id } };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.json({ token, user: { id: user.id, email: user.email } });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

exports.logout = async (req, res) => {
  // Here you could implement logic to invalidate the token (optional)

  // Send response indicating that the logout was successful
  res.status(200).json({ message: "User logged out" });
};
