const { getUserFavourites, addUser, addUserFavourites } = require('../database/models/favourites')




exports.getFavourites = async (req, res) => {
    let id = req.params.id
    try {
        let favourites = await getUserFavourites(id)
        res.status(200).json(favourites[0])
    }
    catch (err) {
        res.status(500).send(err)
    }
}
exports.addNewUsers = async (req, res) => {
    let id = req.params.userid
    let email = req.params.useremail
    console.log(id,email)
    try {
        let usertoadd = await addUser(id, email)
        console.log(itemtoadd)
        res.status(201).json(usertoadd[0])
    }
    catch (err) {
        res.status(500).send(err)
    }
},
    exports.addUsersFavourites = async (req, res) => {
        let placeName = req.params.place
        let lat = req.params.lat
        let long = req.params.long
        let id=req.params.userid
        try {
            let itemstoadd = await addUserFavourites(placeName, lat, long,id)
            
            res.status(201).json(itemstoadd[0])
        }
        catch (err) {
            res.status(500).send(err)
        }
    }











