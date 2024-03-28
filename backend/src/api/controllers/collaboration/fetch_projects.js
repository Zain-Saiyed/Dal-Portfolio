import { CollabProjects } from "../../../models/index.js";

export default async (req, res) => {
  try {
    //fetch projects based on the user_id
    const { user_id } = req.query;
    const projects = await CollabProjects.find({ user_id });
    return res.status(200).json(projects);
  } catch (error) {
    return res.status(500).json({ error: "Failed to fetch projects" });
  }
  //todo: send 401 after auth logic is available to prevent unauthorized access
};
