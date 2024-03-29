import { CollabResearchStudies } from "../../../models/index.js";

export default async (req, res) => {
  try {
    //fetch research studies based on the user_id
    const { user_id } = req.query;
    const research_studies = await CollabResearchStudies.find({ user_id });
    return res.status(200).json(research_studies);
  } catch (error) {
    return res.status(500).json({ error: "Failed to fetch research studies" });
  }
  //todo: send 401 after auth logic is available to prevent unauthorized access
};
