import { CollabRequests } from "../../../models/index.js";

export default async (req, res) => {
  try {
    const { receiver_user_id, sender_user_id, projects, researchs, status } =
      req.body;

    var projectStatuses = [];
    var researchStatuses = [];

    if (req.body.hasOwnProperty("projects") && req.body.projects.length > 0) {
      projectStatuses = projects.map((project_id) => {
        return {
          project_id: project_id,
          status: status,
        };
      });
    }

    if (req.body.hasOwnProperty("researchs") && researchs.length > 0) {
      researchStatuses = researchs.map((project_id) => {
        return {
          project_id: project_id,
          status: status,
        };
      });
    }
    console.log(projectStatuses);
    console.log(researchStatuses);

    const newRequest = new CollabRequests({
      receiver_user_id: receiver_user_id,
      sender_user_id: sender_user_id,
      projects: projectStatuses,
      researchs: researchStatuses,
      status: status,
    });
    const savedRequest = await newRequest.save();
    return res.status(200).json(savedRequest);
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Failed to write request info" + error.message });
  }
};
