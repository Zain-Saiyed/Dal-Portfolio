import mongoose from "mongoose";
const { Schema, model } = mongoose;

// Defining new Mongoose Schema for Portfolio collection
const portfolioSchema = new Schema({
  portfolioType: { type: String, required: true },
  summary: [{ type: String }],
  twitter_link: { type: String },
  github_link: { type: String },
  linkedin_link: { type: String },
  gscholar_link: { type: String },
  resume_link: { type: String },
  projects: [{
    title: { type: String, required: true },
    description: { type: String, required: true },
    completionDate: { type: Date, required: true },
    status: { type: String, enum: ['completed', 'in-progress'], required: true },
    technologies: [{ type: String }],
    github_link: { type: String, required: true },
    demo_link: { type: String },
    images: [{ type: String }],
    remarks: [{ type: String }],
    project_id: { type: String, required: true }
  }],
  education: [{
    degree: { type: String, required: true },
    field_of_study: { type: String, required: true },
    university: { type: String, required: true },
    start_date: { type: Date, required: true },
    end_date: { type: Date, required: true },
    grade_obtained: { type: Number, required: true },
    max_grade: { type: Number, required: true },
    description: { type: String, required: true }
  }],
  experience: [{
    company_name: { type: String, required: true },
    company_link: { type: String },
    role: { type: String, required: true },
    location: { type: String, required: true },
    start_date: { type: Date, required: true },
    end_date: { type: Date, required: true },
    description: { type: String, required: true }
  }],
  skills: [{
    name: { type: String, required: true },
    rating: { type: Number, required: true }
  }],
  achievements: [{
    completionDate: { type: Date, required: true },
    detail: { type: String, required: true }
  }],
  research: [{
    title: { type: String, required: true },
    journal: { type: String },
    publication_date: { type: Date },
    status: { type: String, enum: ['completed', 'in-progress'] },
    authors: [{ type: String }],
    description: { type: String, required: true },
    methods: [{ type: String }],
    publication_page: { type: String },
    download_link: { type: String }
  }],
  certifications: [{
    title: { type: String, required: true },
    issuer: { type: String, required: true },
    date: { type: Date, required: true },
    expiry_date: { type: Date },
    verification_link: { type: String }
  }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  portfolioName: { type: String, required: true },
  default: { type: Boolean, default: false },
  user_id: { type: Schema.Types.ObjectId, required: true },
  username: { type: String, required: true }
},
{
  timestamps: true,
  collection: "portfolios",
});

// Creating the Model for the schema
const Portfolio = model("Portfolios", portfolioSchema);

export default Portfolio;