const connection=require('../index')


module.exports={

     getAllBusStations:()=>{
        let sql =`SELECT * FROM bus`
       return connection.query(sql)
      },
      
      
       getNearbyBusStations:(userlat,userlong)=>{
      let sql= `
      
        SELECT *,
               (6371000 * Acos (Cos (Radians(${userlat})) * Cos(Radians(latitude)) *
                                 Cos(Radians(longitude) - Radians(${userlong}))
                                   + Sin (Radians(${userlat})) *
                                     Sin(Radians(latitude)))
               ) AS distance_m
        FROM   bus
        HAVING distance_m < 1000
        Order by distance_m ASC;`
       return  connection.query(sql)
      }

}