import bycript, { compare } from "bcrypt";
import jwt from "jsonwebtoken";

import { insertUser } from "../models/auth.model.js";
import { fetchUserByEmail } from "../models/user.model.js";

const registerUser = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  if (!firstName || !lastName || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    //register user to databse
    const hashedPassword = await bycript.hash(password, 10);

    const results = await insertUser(
      firstName,
      lastName,
      email,
      hashedPassword
    );

    res.json(results);
  } catch (error) {
    console.error("Error registering:", error);
    res.status(500).send("Error registering");
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    //fetch user by email
    const results = await fetchUserByEmail(email);
    const user = results.rows[0];

    //verify password
    const comparePassword = await bycript.compare(password, user.password);
    if (!user || !comparePassword) {
      res.status(401).json({ message: "Invalid credentials" });
    }

    //check if email matches
    if (!user || email !== user.email) {
      res.status(401).json({ message: "Invalid email" });
    }

    //generate token
    const token = jwt.sign({ id: user.id }, "mycats", {
      expiresIn: "1hr",
    });
    res.json({token});
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: "An error occurred during login" });
  }
};

export { registerUser, login };
