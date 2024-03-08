const {getAllTrainStations,getNearbyTrainStations}=require('../database/models/trains')


exports.getAll= async (req,res)=>{
    try{
       let stations= await getAllTrainStations()
       console.log("there are" ,stations[0].length,"train stations in total")
       res.status(200).json(stations[0])
    }
    catch(err){
        res.status(500).send(err)
    }
}

exports.getNear=async (req,res)=>{
   let lat=req.params.latitude;
   let long=req.params.longitude;
    try{
        let near = await getNearbyTrainStations(lat,long)
        console.log("there are",near[0].length,"train stations near you")
        res.status(201).json(near[0])
    }
    catch(err){
        res.status(501).send(err)
    }
}