import logger from "../logger.js";
import en from "../lang/en.js";
import fr from "../lang/fr.js";

export default (code, req, errorMessage) => {
  let key = code;
  if (!en[code]) key = "00008";

  let userId = "";
  if (req && req.user && req.user._id) userId = req.user._id;

  const enMessage = en[key];
  const trMessage = fr[key];

  if (enMessage.includes("server error")) {
    logger(code, userId, errorMessage, "Server Error", req);
  } else {
    logger(code, userId, errorMessage ?? enMessage, "Client Error", req);
  }

  return {
    resultMessage: {
      en: enMessage,
      fr: trMessage,
    },
    resultCode: code,
  };
};

