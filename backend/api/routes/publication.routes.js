const express = require("express");
const router = express.Router();
const {
	getAllPublications,
	savePublication,
	getApprovedPublications,
	getRejectedPublications,
	getPendingPublications,
	getPaidPublications,
	getUnpaidPublications,
	payPublications,
	approvePublications,
	rejectPublications,
} = require("../controllers/publication.controller");
const verifyModeratorAuth = require("../auth/verifyModeratorAuth");
const verifyResearcherAuth = require("../auth/verifyResearcherAuth");

router.get("/", verifyModeratorAuth, getAllPublications);
router.post("/create", verifyResearcherAuth, savePublication);
router.get("/approved", verifyModeratorAuth, getApprovedPublications);
router.get("/rejected", verifyModeratorAuth, getRejectedPublications);
router.get("/pending", verifyModeratorAuth, getPendingPublications);
router.get("/paid", verifyModeratorAuth, getPaidPublications);
router.get("/unpaid", verifyModeratorAuth, getUnpaidPublications);
router.patch("/pay/:id", verifyResearcherAuth, payPublications);
router.patch("/approve/:id", verifyModeratorAuth, approvePublications);
router.patch("/reject/:id", verifyModeratorAuth, rejectPublications);

module.exports = router;
