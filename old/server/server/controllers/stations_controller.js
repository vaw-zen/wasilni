
const {getAllStations,getNearbyStations}=require("../database/models/metro")
exports.getAll= async (req,res)=>{
    try{
       let stations= await getAllStations()
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
        let near = await getNearbyStations(lat,long)
        console.log("there are ",near[0].length,"metro stations in the area")
        res.status(201).json(near[0])
    }
    catch(err){
        res.status(501).send(err)
    }
}