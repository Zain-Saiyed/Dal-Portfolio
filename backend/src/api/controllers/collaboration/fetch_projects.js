import { CollabProjects } from "../../../models/index.js";

export default async (req, res) => {
  try {
    const projects = await CollabProjects.find();
    return res.status(200).json(projects);
  } catch (error) {
    return res.status(500).json({ error: "Failed to fetch projects" });
  }
};
