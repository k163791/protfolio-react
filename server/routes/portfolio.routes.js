import express from 'express'
import PortfolioCtrl from '../controllers/portfolio.controller'

const router = express.Router()

router.route("api/portfolio").get(portfolioCtrl.list).post(portfolioCtrl.create)

router.route("api/portfolio/:portfolioId")
	.get(portfolioCtrl.read)
	.post(portfolioCtrl.update)

router.param("portfolioId", portfolioCtrl.portfolioById)

export default router;
