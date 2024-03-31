import {
  CollabRequests,
  CollabProjects,
  CollabResearchStudies,
} from "../../../models/index.js";

export default async (req, res) => {
  try {
    const { user_id } = req.query;
    if (!user_id) {
      return res.status(400).json({ error: "User ID is required" });
    }
    const receiver_user_id = user_id;
    const collab_requests = await CollabRequests.find({ receiver_user_id });

    const promises = collab_requests.map(async (request) => {
      const project_details = [];
      const research_details = [];

      await Promise.all(
        request.projects.map(async (project) => {
          console.log("  Project ID:", project.project_id);
          if (project.status === "PENDING") {
            const projectPromise = CollabProjects.findById(project.project_id);
            project_details.push(await projectPromise);
          }
          console.log("  Status:", project.status);
        })
      );

      console.log("Researches:");
      await Promise.all(
        request.researchs.map(async (research) => {
          console.log("  Research ID:", research.project_id);

          if (research.status === "PENDING") {
            const researchPromise = CollabResearchStudies.findById(
              research.project_id
            );
            research_details.push(await researchPromise);
          }
          console.log("  Status:", research.status);
        })
      );

      return {
        receiver_user_id: request.receiver_user_id,
        sender_user_id: request.sender_user_id,
        projects: project_details,
        researchs: research_details,
        _id: request._id,
      };
    });

    Promise.all(promises)
      .then((responses) => {
        res.status(200).json(responses);
      })
      .catch((error) => {
        return res.status(500).json({ error: error.message });
      });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
