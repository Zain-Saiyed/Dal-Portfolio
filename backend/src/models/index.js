import userModel from "./user.js";
import tokenModel from "./token.js";
import logModel from "./log.js";
import portfolioModel from "./portfolio.js";
import discussionPostModel from './discussionforum/mainpost.js'
import verificationModel from './verification.js'
import ResetTokenModel from "./resetpassword.js";

export const User = userModel;
export const Token = tokenModel;
export const Log = logModel;
export const Portfolio = portfolioModel;

export const DiscussionPost= discussionPostModel;
export const Verification = verificationModel;

export const ResetToken = ResetTokenModel;