const mysql = require('mysql2')
const mysqlConfig = require('./config.js')

//IMPORTANT!!!
//Created a connection that is using promise
const connection = mysql.createConnection(mysqlConfig).promise()

connection
  .connect()
  .then(() => {
    console.log('Connected to MySQL!')
  })
  .catch((err) => {
    console.log(err)
  })

  

// Your Database Queries Here!!








  






// const dezz = () => {  
//     obj.features.forEach((e)=> {
     
//      connection.query(`INSERT INTO train (line,departure,arrival,stations_number,itenerary,latitude,longitude,traject)  VALUES ("${e.properties["Ligne"]}", "${e.properties["Départ"]}" , "${e.properties["Arrivée"]} "," ${e.properties["Nombre_des_stations"]}","${e.properties["Itinéraire"]}", ${e.properties["Latitude"]},${e.properties["Longitude"]},"${e.properties["Trajet"]}")`)
//     })


// }








// Don't forget to export your functions!

module.exports=connection;