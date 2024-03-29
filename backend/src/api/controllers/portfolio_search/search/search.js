import { Portfolio } from "../../../../models/index.js";
import { errorHelper } from "../../../../utils/index.js";

export default async (req, res) => {
    try {
        const searchString = req.query.search;

        const regex = new RegExp(searchString, 'i');
        const query = { $or: [
          {'summary': { $regex: regex } },
          {'projects.title': { $regex: regex } },
          {'projects.description': { $regex: regex } },
          {'projects.technologies': { $regex: regex } },
          {'education.degree': { $regex: regex } },
          {'education.field_of_study': { $regex: regex } },
          {'education.university': { $regex: regex } },
          {'education.description': { $regex: regex } },
          {'experience.company_name': { $regex: regex } },
          {'experience.role': { $regex: regex } },
          {'experience.description': { $regex: regex } },
          {'skills.name': { $regex: regex } },
          {'achievements.detail': { $regex: regex } },
          {'certifications.title': { $regex: regex } },
        ] };

        const result = await Portfolio.find(query);

        res.status(200).json({
            resultMessage: { en: "Fetched documents successfully", fr: "Documents récupérés avec succès" },
            resultCode: "00703",
            listOfDocuments: result
        });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ 
            resultMessage: { en: "Error fetching documents", fr: "Erreur lors de la récupération des documents" },
            resultCode: "00704"
        });
    }
};
