import User from "../models/user.model.js";

export const getUsersForSidebar = async (req, res)=>{
    try {
        const loggedInUserId = req.user._id;

        const filterredUsers = await User.find({_id: {$ne: loggedInUserId}}).select("-password");
        
        res.status(200).json(filterredUsers);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
}