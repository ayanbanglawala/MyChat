import User from "../models/user.model.js";
export const signup = async (req, res) => {
    console.log(req.body);  // Log the incoming request body
    try {
      const { fullName, username, password, cPassword, gender } = req.body;
      if (password !== cPassword) {
        return res.status(400).json({ error: 'Passwords do not match' });
      }
  
      const user = await User.findOne({ username });
      if (user) {
        return res.status(400).json({ error: 'Username already exists' });
      }
  
      const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
      const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;
  
      const newUser = new User({
        fullName,
        username,
        password,
        gender,
        profilePic: gender === 'male' ? boyProfilePic : girlProfilePic
      });
  
      await newUser.save();
      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        username: newUser.username,
        profilePic: newUser.profilePic
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message });
    }
  };
  

export const login = (req, res)=>{
    res.send('User Logged In');
}


export const logout = (req, res)=>{
    res.send('Logout Users');
}