import { fetchUserByEmail } from "../models/user.model.js";

const getUserByEmail = async (req, res) => {
  const { email } = req.body;

  try {
    const result = await fetchUserByEmail(email);

    if (result.rows.length === 0) {
      return res.status(404).send("User not found");
    }

    res.send(result.rows[0]);
  } catch (error) {
    console.error("Error fetching a user", error);
    res.status(500).send("Error fetching a user");
  }
};

export { getUserByEmail };
