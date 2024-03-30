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
    const result = collab_requests.map((request) => {
      return {
        receiver_user_id: request.receiver_user_id,
        sender_user_id: request.sender_user_id,
        project_ids: request.project_ids,
        research_ids: request.research_ids,
        status: request.status,
        __v: request.__v,
      };
    });

    processResults(result)
      .then((res_obj) => {
        res.status(200).json(res_obj);
      })
      .catch((error) => {
        return res.status(500).json({ error: error.message });
      });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

async function processResults(result) {
  const res_obj = [];
  for (const element of result) {
    if (element.status !== "PENDING") {
      continue;
    }

    const project_details = [];
    const research_details = [];
    const promises = [];
    const response = {};

    // Process project_ids
    for (const project_id of element.project_ids) {
      const promise = CollabProjects.findById(project_id)
        .then((project) => {
          if (project) {
            project_details.push(project);
          }
        })
        .catch((error) => {
          console.error(error);
          throw new Error(error);
        });

      promises.push(promise);
    }

    // Process research_ids
    for (const research_id of element.research_ids) {
      const promise = CollabResearchStudies.findById(research_id)
        .then((research) => {
          if (research) {
            research_details.push(research);
          }
        })
        .catch((error) => {
          console.error(error);
          throw new Error(error);
        });

      promises.push(promise);
    }

    await Promise.all(promises);

    response["receiver_user_id"] = element.receiver_user_id;
    response["sender_user_id"] = element.sender_user_id;
    response["project_titles"] = project_details;
    response["research_titles"] = research_details;

    res_obj.push(response);
  }

  return res_obj;
}
