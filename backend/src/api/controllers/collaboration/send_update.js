import { CollabRequests } from "../../../models/index.js";

import { ObjectId } from "mongodb";

export default async (req, res) => {
  try {
    const {
      receiver_user_id,
      sender_user_id,
      project,
      project_id,
      status,
      _id,
    } = req.body;

    if (
      !receiver_user_id ||
      !sender_user_id ||
      !project ||
      !status ||
      !_id ||
      !project_id
    ) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    console.log(
      "Receiver User ID:",
      receiver_user_id + "\n" + "Sender User ID:",
      sender_user_id + "\n" + "Project:",
      project + "\n" + "Project ID:",
      project_id + "\n" + "Status:",
      status + "\n" + "_id:",
      _id
    );

    const filter = { _id: new ObjectId(_id) };
    const projectUpdate = {
      $set: { "projects.$[elem].status": status },
    };
    const researchUpdate = {
      $set: { "researchs.$[elem].status": status },
    };

    const projectArrayFilters = {
      arrayFilters: [{ "elem.project_id": { $eq: project_id } }],
    };
    const researchArrayFilters = {
      arrayFilters: [{ "elem.project_id": { $eq: project_id } }],
    };

    const projectUpdateResult = await CollabRequests.updateOne(
      filter,
      projectUpdate,
      projectArrayFilters
    );
    const researchUpdateResult = await CollabRequests.updateOne(
      filter,
      researchUpdate,
      researchArrayFilters
    );

    if (projectUpdateResult.modifiedCount > 0) {
      console.log("Project status updated successfully");
    } else {
      console.log("Project status update failed");
    }

    if (researchUpdateResult.modifiedCount > 0) {
      console.log("Research status updated successfully");
    } else {
      console.log("Research status update failed");
    }
  } catch (error) {
    return res.status(500).json({ error: "Failed to write request info" });
  }
};
