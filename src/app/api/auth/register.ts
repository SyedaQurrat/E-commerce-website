import { NextApiRequest, NextApiResponse } from "next";

// Temporary users array
const users: { id: string; name: string; email: string; password: string }[] = [];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { email, password, name } = req.body;

    // Check if user already exists
    const existingUser = users.find((user) => user.email === email);

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Add new user to the array
    const newUser = { id: `${users.length + 1}`, name, email, password };
    users.push(newUser);

    res.status(201).json({ message: "User registered successfully" });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
