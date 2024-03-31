import { User } from "../../../../models/index.js";

import { validateRegister } from "../../../validators/user.validator.js";

import {
  logger,
  getText,
  errorHelper,
  signConfirmCodeToken,
  generateRandomCode,
} from "../../../../utils/index.js";
import bcrypt from "bcryptjs";
const { hash } = bcrypt;

export default async (req, res) => {
  const { error, value, warning } = validateRegister(req.body);
  if (error) {
    return res
      .status(400)
      .json(errorHelper("00025", req, error.details[0].message));
  }

  const exists = await User.exists({ username: req.body.username }).catch(
    (err) => {
      return res.status(500).json(errorHelper("00031", req, err.message));
    }
  );

  if (exists) return res.status(409).json(errorHelper("00032", req));

  const hashed = await hash(req.body.password, 10);

  const emailCode = generateRandomCode(4);

  let user = new User({
    ...value,
    password: hashed,
  });

  user = await user.save().catch((err) => {
    return res.status(500).json(errorHelper("00034", req, err.message));
  });

  user.password = null;

  const confirmCodeToken = signConfirmCodeToken(user._id, emailCode);

  logger("00035", user._id, getText("en", "00035"), "Info", req);
  return res.status(200).json({
    resultMessage: { en: getText("en", "00035"), fr: getText("fr", "00035") },
    resultCode: "00035",
    user,
    confirmToken: confirmCodeToken,
  });
};
