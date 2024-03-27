import { 
  User, 
  Portfolio 
} from "../../../../models/index.js";
import {
  getText,
  errorHelper,
} from "../../../../utils/index.js";

// GET Portfolio details for a specific user
export default async (req, res) => {
  const { user_name } = req.params;

  try {
    // Get status if User exists in Database collection 
    const exists = await User.exists({ username: req.body.username }).catch(
      (err) => {
        return res.status(500).json(errorHelper("00031", req, err.message));
      }
    );
      
    // If User exists 
    if (exists) return res.status(409).json(errorHelper("00032", req));

    // User exists so get the Portfolio details based for the user
    const portfolio = await Portfolio.findOne({ portfolioName: user_name });

    // Portfolio - Not Found
    if (!portfolio) {
      return res.status(404).json(errorHelper("00033", req, "Portfolio not created by user"));
    }

    // Return Sucessfully retrieved the portfolio 
    return res.status(200).json({ 
      resultCode: "00035",
      resultMessage: { en: getText("en", "00035"), fr: getText("fr", "00035") },
      portfolio });
  
  // In case of error 
  } catch (error) {
    return res.status(500).json(errorHelper("00034", req, error.message));
  }
};