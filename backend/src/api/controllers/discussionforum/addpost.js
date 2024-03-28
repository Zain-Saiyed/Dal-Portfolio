import DiscussionPost from "../../../models/discussionforum/mainpost";
import { logger, errorHelper, getText } from "../../../utils";

const saveDiscussionPost = async (req, res) => {
  try {
    const { username, title, description, date } = req.body;
    const discussionPost = new DiscussionPost({
      userName: username,
      title: title,
      description: description,
      date: date,
      replies: [] 
    });
    const savedPost = await discussionPost.save();
    console.log("Discussion post saved successfully:", savedPost);
    //add logger 
    return res.status(201).json({
        resultMessage: { en: getText("en", "00701"), fr: getText("fr", "00701")},
        resultCode: "00701"
    });
  } 
  catch (error) {
    console.error("Error saving discussion post:", error);
    res.status(500).json({ error: "Error saving discussion post" }); // Respond with error message
    return res.status(500).json({
        resultMessage: { en: getText("en", "00702"), fr: getText("fr", "00702")},
        resultCode: "00702"
    });
  }
};

export default saveDiscussionPost;
