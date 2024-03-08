const stationRouter = require('express').Router();
const stationController = require('../controllers/stations_controller')


stationRouter.get('/stations', stationController.getAll);
stationRouter.get('/stations/nearby/:latitude/:longitude', stationController.getNear);


module.exports = stationRouter;