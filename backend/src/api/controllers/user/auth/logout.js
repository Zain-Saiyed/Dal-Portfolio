import bcrypt from 'bcryptjs';
import { User, Token } from "../../../../models/index.js";
import { signAccessToken, signRefreshToken } from "../../../../utils/index.js";

const logout = async (req, res) => {
    const { refreshToken } = req.body;  // Assuming the refresh token is sent in the request body

    if (!refreshToken) {
        return res.status(400).json({ message: "Refresh token is required" });
    }

    try {
        const token = await Token.findOne({ refreshToken });
        if (!token) {
            return res.status(400).json({ message: "Invalid refresh token" });
        }

        // Invalidate the token by deleting it or marking as inactive
        await Token.findByIdAndRemove(token._id);  // Deleting the token record

        res.status(200).json({ message: "Logged out successfully" });
    } catch (error) {
        console.error("Logout error:", error);
        res.status(500).json({ message: "Internal server error during logout" });
    }
};

export default logout;
