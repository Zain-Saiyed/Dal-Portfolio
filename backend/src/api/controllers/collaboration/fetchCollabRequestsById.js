import { CollabRequests } from "../../../models/index.js";

export default async (req, res) => {
  try {
    const { user_id } = req.query;
    if (!user_id) {
      return res.status(400).json({ error: "User ID is required" });
    }
    const receiver_user_id = user_id;
    const requests = await CollabRequests.find({ receiver_user_id });
    return res.status(200).json(requests);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
