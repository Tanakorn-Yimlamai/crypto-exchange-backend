// In controllers/userController.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.createUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Basic validation
    if (!username || !email || !password) {
      return res.status(400).json({ error: 'Username, email, and password are required.' });
    }

    const newUser = await prisma.user.create({
      data: {
        username: username,
        email: email,
        password_hash: password, // In a real application, you should hash the password before storing it
        fiat_balance_thb: 0,
        fiat_balance_usd: 0,
      },
    });

    res.status(201).json({
      message: 'User created successfully!',
      user: {
        user_id: newUser.user_id,
        username: newUser.username,
        email: newUser.email,
      },
    });
  } catch (error) {
        console.error(error); 

        // the email or username is already taken
        if (error.code === 'P2002') {
            return res.status(409).json({ error: 'Email or username already exists.' });
        }
        res.status(500).json({ error: 'An error occurred while creating the user.' });
    }
};