import mongoose from "mongoose";
const { Schema, model } = mongoose;

const collaborationRequest = new Schema({
  receiver_user_id: {
    type: String,
    required: true,
  },
  sender_user_id: {
    type: String,
    required: true,
  },
  project_ids: {
    type: [String],
    required: true,
  },
  research_ids: {
    type: [String],
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

const collabRequest = model("collab_requests", collaborationRequest);
export default collabRequest;
