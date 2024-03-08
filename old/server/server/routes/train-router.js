const trainRouter=require('express').Router()
const trainController=require('../controllers/trainController')


trainRouter.get('/trains',trainController.getAll)
trainRouter.get('/trains/nearby/:latitude/:longitude',trainController.getNear)




module.exports=trainRouter;