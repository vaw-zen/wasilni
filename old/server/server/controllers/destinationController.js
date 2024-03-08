const {getAlldestinations,getNearbyDestinations}=require('../database/models/destination')


exports.getAll= async (req,res)=>{
    try{
       let stations= await getAlldestinations()
       res.status(200).json(stations[0])
    }
    catch(err){
        res.status(500).send(err)
    }
}

exports.getNear=async (req,res)=>{
   let lat=req.params.latitude;
   let long=req.params.longitude;
   let vehicul=req.params.vehicul;
    try{
        let near = await getNearbyDestinations(vehicul,lat,long)
        console.log("there are",near[0].length,vehicul," stations near you")
        res.status(201).json(near[0])
    }
    catch(err){
        res.status(501).send(err)
    }
}