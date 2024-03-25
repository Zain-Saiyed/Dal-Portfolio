import { User } from "../../../models/index.js";
import { errorHelper, getText } from "../../../utils/index.js";

const fetchUserDetails = async (req, res) => {
  const user_id = req.params.id;
  if (!user_id) {
    return res
      .status(500)
      .json(errorHelper("00007", req, "User ID is required!"));
  }

  const user = await User.findById(user_id, { password: 0 }).catch((err) => {
    return res.status(500).json(errorHelper("00013", req, err.message));
  });

  return res.status(200).json({
    resultMessage: {
      en: getText("en", "00004"),
      fr: getText("fr", "00004"),
    },
    resultCode: "00004",
    user: user,
  });
};

const updateUserDetails = async (req, res) => {
  const user_id = req.params.id;
  if (!user_id) {
    return res
      .status(500)
      .json(errorHelper("00007", req, "User ID is required!"));
  }

  const user = await User.findByIdAndUpdate(user_id, req.body, {
    new: true,
  }).catch((err) => {
    return res.status(500).json(errorHelper("00014", req, err.message));
  });

  return res.status(200).json({
    resultMessage: {
      en: getText("en", "00093"),
      fr: getText("fr", "00093"),
    },
    resultCode: "00093",
  });
};

export { fetchUserDetails, updateUserDetails };
