const favouritesRouter=require('express').Router()
const favouritesController=require('../controllers/favouritesController')


favouritesRouter.get('/favourites/:id',favouritesController.getFavourites)
favouritesRouter.post('/add/:userid/:useremail',favouritesController.addNewUsers)
favouritesRouter.post('/add/:place/:lat/:long/:userid',favouritesController.addUsersFavourites)

module.exports=favouritesRouter;