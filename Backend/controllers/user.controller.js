import User from '../models/User.model.js';

export const signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create new user
    const newUser = new User({ username, email, password });
    await newUser.save();
    
    res.status(201).json({ message: 'User created successfully', user: newUser });
  } catch (error) {
    console.error('Error signing up user:', error.message);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email });

    // Check if user exists and password is correct
    if (!user || user.password !== password) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    res.status(200).json({ message: 'Login successful', user });
  } catch (error) {
    console.error('Error logging in user:', error.message);
    res.status(500).json({ message: 'Internal server error' });
  }
};


// get all users
export const getAll = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.log("Error: ", error);
    res.status(500).json(error);
  }
}

// Delete a user by ID
export const drop = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) {
      return res.status(404).json({ message: "Hotel not found" });
    }
    res.status(200).json({ message: "Hotel deleted successfully" });
  } catch (error) {
    console.log("Error: ", error);
    res.status(500).json({ message: "Internal server error" });
  }
};