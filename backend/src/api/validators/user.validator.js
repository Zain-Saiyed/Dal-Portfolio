import Joi from "joi";

export function validateRegister(body) {
  const schema = Joi.object({
    username: Joi.string().alphanum().min(3).required(),
    email: Joi.string().email().min(3).required(),
    password: Joi.string()
      .regex(
        RegExp(
          "^(?=[a-zA-Z0-9#@$?]{8,}$)(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9]).*"
        )
      )
      .min(8)
      .required(),
    profile: Joi.object({
      first_name: Joi.string().min(3).required(),
      last_name: Joi.string().min(3).required(),
      gender: Joi.string().valid("male", "female", "other").required(),
      pronouns: Joi.string(),
      dob: Joi.date(),
    }).required(),
    type: Joi.string()
      .valid("admin", "user", "recruiter", "creator")
      .default("user"),
    photoUrl: Joi.string().default(""),
    isVerified: Joi.boolean().default(false),
    deletedAt: Joi.date(),
  });
  return schema.validate(body);
}

export function validateUpdateUser(body) {
  const schema = Joi.object({
    username: Joi.string().alphanum().min(3).required(),
    email: Joi.string().email().min(3).required(),
    profile: Joi.object({
      first_name: Joi.string().min(3).required(),
      last_name: Joi.string().min(3).required(),
      gender: Joi.string().valid("male", "female", "other").required(),
      pronouns: Joi.string().default("").allow(null, ""),
      dob: Joi.date(),
    }).required(),
    type: Joi.string()
      .valid("admin", "user", "recruiter", "creator")
      .default("user"),
    photoUrl: Joi.string().default("").allow(null, ""),
    isVerified: Joi.boolean().default(false),
    deletedAt: Joi.date().default(null).allow(null, ""),
  });
  return schema.validate(body);    
}