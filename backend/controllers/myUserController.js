const User = require('../models/myUser');

// Create a new product
exports.createUser = async (req, res) => {
  try {
    const { name,dob,state,country,interests} = req.body;
    const imageUrl=req.file.path;
      const data=  {
        name: name,
        photo:imageUrl,
        dob:dob,
        state: state,
        country: country,
        interests:interests,        
      }      
    const user = new User(data);
    const savedUser = await user.save();
    res.json(savedUser);
} catch (err) {
    res.status(400).json({ message: err.message });
  }
};
exports.getUser = async (req, res) => {
  try {
    const user = await User.find();
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};