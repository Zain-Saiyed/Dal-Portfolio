import { CollabProjects, Portfolio } from "../../../models/index.js";

export default async (req, res) => {
  try {
    const { user_id } = req.query;

    console.log("user_id", user_id);
    const projects = await Portfolio.findOne({ user_id }, 'projects');
    return res.status(200).json(projects);

  } catch (error) {
    return res.status(500).json({ error: "Failed to fetch projects" });
  }
  //todo: send 401 after auth logic is available to prevent unauthorized access
};
