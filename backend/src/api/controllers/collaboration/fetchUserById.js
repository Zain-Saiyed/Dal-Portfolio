import { User } from "../../../models/index.js";

export default async (req, res) => {
    try {
        const { user_id } = req.query;
    
        if (!user_id) {
        return res.status(400).json({ error: "Missing required fields" });
        }
    
        const user = await User.findOne({ _id: user_id });

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        } else {    
            return res.status(200).json(user);
        }
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal server error" });
    }
}

