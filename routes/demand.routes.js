const router = require("express").Router();
const demand = require("../controllers/demand.controller.js");
const { checkToken } = require("../middlewares/checkToken.middleware.js");



router.post("/", checkToken, demand.createDemand);
router.get("/", checkToken, demand.getDemands);
router.get("/demande/:id", checkToken, demand.getDemandById);
router.get("/demande-user/", checkToken, demand.demandesByUser);
router.delete("/demande/:id", checkToken, demand.deleteDemandById);
router.put("/demande/:id", checkToken, demand.demandRespond);


module.exports = router;
 