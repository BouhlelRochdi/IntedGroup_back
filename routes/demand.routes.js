const router = require("express").Router();
const demand = require("../controllers/demand.controller.js");



router.post("/", demand.createDemand);
router.get("/", demand.getDemands);
router.get("/demande/:id", demand.getDemandById);
router.delete("/demande/:id", demand.deleteDemandById);
router.put("/demande/:id", demand.deleteDemandById);


module.exports = router;
