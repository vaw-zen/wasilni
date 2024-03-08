const busRouter=require("express").Router();
const busController=require("../controllers/busController");

busRouter.get("/bus",busController.getAll)
busRouter.get("/bus/nearby/:latitude/:longitude",busController.getNear)





module.exports = busRouter;