const {getAllBusStations,getNearbyBusStations}=require('../database/models/bus')


exports.getAll= async (req,res)=>{
    try{
       let stations= await getAllBusStations()
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
        let near = await getNearbyBusStations(lat,long)
        console.log("there are",near[0].length,"bus stations near you")
        res.status(201).json(near[0])
    }
    catch(err){
        res.status(501).send(err)
    }
}