const connection=require('../index')


module.exports={

     getAlldestinations:()=>{
        let sql =`SELECT * FROM areas`
       return connection.query(sql)
      },
      
      
       getNearbyDestinations:(transport,destinationlat,destinationlong)=>{
      let sql= `
      
        SELECT *,
               (6371000 * Acos (Cos (Radians(${destinationlat})) * Cos(Radians(latitude)) *
                                 Cos(Radians(longitude) - Radians(${destinationlong}))
                                   + Sin (Radians(${destinationlat})) *
                                     Sin(Radians(latitude)))
               ) AS distance_m
        FROM   ${transport}
        HAVING distance_m < 1000
        Order by distance_m ASC;`
       return  connection.query(sql)
      }

}