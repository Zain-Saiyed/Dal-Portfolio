import { User, Portfolio } from "../../../../models/index.js";
import { getText, errorHelper } from "../../../../utils/index.js";

// Retrieve Portfolio details for a specific user
export default async (request, response) => {
  const user_name = request.body.user_name;

  try {
    // Check if user exists in the database in user collection
    const exists = await User.exists({ username: user_name });
    
    // If user does not exists, return user not found error
    if (!exists) {
      return response.status(404).json(errorHelper("00033", request, "User not found"));
    } 
    
    // Get detailed user detail
    const user = await User.findOne({ username: user_name });

    // Fetch portfolio details for the user
    var portfolio = await Portfolio.findOne({ username: user_name });

    // If portfolio is not found, return portfolio not created by user error
    if (portfolio === null) {
      return response.status(404).json(errorHelper("00033", request, "Portfolio not created by user"));
    }

    // Return portfolio details
    return response.status(200).json({
      // resultCode: "00035",
      // resultMessage: {
      //   en: getText("en", "00035"),
      //   fr: getText("fr", "00035"),
      // },
      "portfolio_detail":{
        "portfolioType": portfolio.portfolioType,
        "summary": portfolio.summary,
        "twitter_link": portfolio.twitter_link,
        "linkedin_link": portfolio.linkedin_link,
        "github_link": portfolio.github_link,
        "gscholar_link": portfolio.gscholar_link,
        "projects": portfolio.projects,
        "education": portfolio.education,
        "experience": portfolio.experience,
        "skills": portfolio.skills,
        "achievements": portfolio.achievements,
        "research": portfolio.research,
        "certifications": portfolio.certifications,
        "updatedAt": portfolio.updatedAt,
        "resume_link": portfolio.resume_link,
        "user_data": {
          "email": user.email,
          "first_name" : user.profile.first_name,
          "last_name" : user.profile.last_name
        }
      }
    });

  } catch (error) {
    return response.status(500).json(errorHelper("00034", request, error.message));
  }
};
