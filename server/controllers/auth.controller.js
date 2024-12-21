import { insertUser } from "../models/auth.model";

const registerUser = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  try {
    const results = await insertUser(firstName, lastName, email, password);

    if (!firstName || !lastName || !email || !password) {
      return;
    }

    res.json(results)
  } catch (error) {
    console.error("Error registering:", error)
    res.status(500).send("Error registering")
  }
};
