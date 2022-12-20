/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from "express";
import Joi from "joi";


export const validateClient = (
    req: Request, res: Response, next: NextFunction
) => {
  const {error} = Joi.object().keys({
    name: Joi.string().min(3).max(40).required(),
    phone: Joi.string().min(9).max(12).pattern(/^[0-9]+$/).required(),
    email: Joi.string().email().required(),
    industry: Joi.string().valid(
        "Healthcare",
        "Technology",
        "Construction",
        "Retail",
        "Manufactoring",
        "Services",
    ).default("Services"),
    website: Joi.string(),
    identificationType: Joi.string().valid("CPF", "CNPJ", "SSN", "EIN"),
    identificationNmber: Joi.number(),
  }).validate(req.body);

  if (error) {
    return res.status(422).send(error.details);
  }
  return next();
};
