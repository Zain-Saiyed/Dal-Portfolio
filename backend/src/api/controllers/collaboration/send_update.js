import { CollabRequests, User } from "../../../models/index.js";
import nodemailer from "nodemailer";

import { ObjectId } from "mongodb";

export default async (req, res) => {
  try {
    const { project_title, sender_user_id, receiver_user_id, status, _id } = req.body;

    if (!receiver_user_id || !sender_user_id || !project_title || !status || !_id) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const filter = { _id: new ObjectId(_id) };
    const projectUpdate = {
      $set: { "projects.$[elem].status": status },
    };
    // const researchUpdate = {
    //   $set: { "researchs.$[elem].status": status },
    // };

    const projectArrayFilters = {
      arrayFilters: [{ "elem.project_id": { $eq: project_title } }],
    };
    // const researchArrayFilters = {
    //   arrayFilters: [{ "elem.project_id": { $eq: project_title } }],
    // };

    const projectUpdateResult = await CollabRequests.updateOne(
      filter,
      projectUpdate,
      projectArrayFilters
    );
    // const researchUpdateResult = await CollabRequests.updateOne(
    //   filter,
    //   researchUpdate,
    //   researchArrayFilters
    // );

    if (
      projectUpdateResult.modifiedCount > 0 
      // || researchUpdateResult.modifiedCount > 0
    ) {
      // if (projectUpdateResult.modifiedCount > 0) {
      //   console.log("Project status updated successfully");
      // }

      // if (researchUpdateResult.modifiedCount > 0) {
      //   console.log("Research status updated successfully");
      // }

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
          project_title +
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
