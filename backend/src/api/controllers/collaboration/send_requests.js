import { CollabRequests } from "../../../models/index.js";

export default async (req, res) => {
  try {
    const {
      receiver_user_id,
      sender_user_id,
      project_ids,
      research_ids,
      status,
    } = req.body;
    const newRequest = new CollabRequests({
      receiver_user_id: receiver_user_id,
      sender_user_id: sender_user_id,
      project_ids: project_ids,
      research_ids: research_ids,
      status: status,
    });
    const savedRequest = await newRequest.save();
    return res.status(200).json(savedRequest);
  } catch (error) {
    return res.status(500).json({ error: "Failed to write request info" });
  }
};
