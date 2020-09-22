import express from "express";
import PortfolioCtrl from "../controllers/portfolio.controller";

const router = express.Router();

router
  .route("/api/portfolio")
  .get(PortfolioCtrl.list)
  .post(PortfolioCtrl.create);

router
  .route("/api/portfolio/:portfolioId")
  .get(PortfolioCtrl.read)
  .put(PortfolioCtrl.update);

router
  .route("/api/portfolio/project/add/:portfolioId")
  .put(PortfolioCtrl.updateProjects);

router.param("portfolioId", PortfolioCtrl.portfolioById);

export default router;
