const connection=require('../index')


module.exports={
    getUserFavourites:(userid)=>{
        connection.query(`SELECT*FROM favourites WHERE users_user-id-firebase=${userid}`)
    },



    addUser:(userid,useremail)=>{
     return connection.query(`INSERT INTO users(idfirebase ,user_email ) VALUES("${userid}","${useremail}")`)
},
addUserFavourites:(placeName,lat,long,userid)=>{
let sql =`INSERT INTO favourites (place_name,latitude,longitude,users_idfirebase) VALUES("${placeName}",${lat},${long},"${userid}") `
return connection.query(sql)

}
}

