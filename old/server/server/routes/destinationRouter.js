const destinationRouter=require("express").Router();
const destinationController=require("../controllers/destinationController");

destinationRouter.get("/destinations",destinationController.getAll)
destinationRouter.get("/:vehicul/:latitude/:longitude",destinationController.getNear)





module.exports = destinationRouter;