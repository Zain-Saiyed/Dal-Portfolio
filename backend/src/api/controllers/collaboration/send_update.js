import { CollabRequests, User } from "../../../models/index.js";
import nodemailer from "nodemailer";

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

    if (
      projectUpdateResult.modifiedCount > 0 ||
      researchUpdateResult.modifiedCount > 0
    ) {
      if (projectUpdateResult.modifiedCount > 0) {
        console.log("Project status updated successfully");
      }

      if (researchUpdateResult.modifiedCount > 0) {
        console.log("Research status updated successfully");
      }

      const sender_user_obj = await User.findOne({
        _id: ObjectId(sender_user_id),
      });
      if (sender_user_obj) {
        console.log(sender_user_obj.email);
      } else {
        console.log("User not found");
        return res.status(404).json({ error: "User not found" });
      }

      var transporter = nodemailer.createTransport({
        service: "gmail",

        auth: {
          user: process.env.EMAIL,
          pass: process.env.EMAIL_PASSWORD,
        },
      });

      var mailOptions = {
        from: "u.boonking@gmail.com", // DalPortfolio email ID
        to: sender_user_obj.email, // potential collaborator email ID
        subject: "You have a response to your Collaboration Request",
        text:
          "There is a response on your request for your " +
          project +
          ".\n Please check your account for more details.",
      };

      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log("Email sent: " + info.response);
        }
      });

      return res.status(200).json({ message: "Status updated successfully" });
    } else {
      return res.status(404).json({ error: "No data found" });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Failed to write request info" + error.message });
  }
};
