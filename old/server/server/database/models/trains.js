const connection=require('../index')


module.exports={

 getAllTrainStations:()=>{
    let sql =`SELECT * FROM train`
   return  connection.query(sql)
  },
  
  
   getNearbyTrainStations:(userlat,userlong)=>{
    let sql= `
  
    SELECT *,
           (6371000 * Acos (Cos (Radians(${userlat})) * Cos(Radians(latitude)) *
                             Cos(Radians(longitude) - Radians(${userlong}))
                               + Sin (Radians(${userlat})) *
                                 Sin(Radians(latitude)))
           ) AS distance_m
    FROM   train
    HAVING distance_m < 2000
    Order by distance_m ASC;`
    return connection.query(sql)
  }
}