import Portfolio from "../models/portfolio.model";
import extend from "lodash/extend";
import errorHandler from "./../helpers/dbErrorHandler";

const create = async (req, res) => {
  const portfolio = new Portfolio(req.body);
  try {
    await portfolio.save();
    return res.status(200).json({
      message: "Successfully signed up",
    });
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

const portfolioById = async (req, res, next, id) => {
  try {
    let portfolio = await Portfolio.findById(id);
    if (!portfolio)
      return res.status(400).json({
        error: "Portfolio not found",
      });

    req.profile = portfolio;
    next();
  } catch (err) {
    return res.status(400).json({
      error: "Could not retrieve Portfolio",
    });
  }
};

const read = (req, res) => {
  return res.json(req.profile);
};

const list = async (req, res) => {
  try {
    let portfolio = await Portfolio.find();
    res.json(portfolio);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

const update = async (req, res) => {
  try {
    let portfolio = req.profile;
    portfolio = extend(portfolio, req.body);
    portfolio.update = Date.now();
    await portfolio.save();

    res.json(portfolio);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

export default {
  create,
  read,
  list,
  update,
  portfolioById,
};
