import axios from "axios";
import { userLocation } from "./map"
let kData = { bus: [], metro: [], train: [] }
let cities;
let nearby = { bus: [], metro: [], train: [] }
let userNearby = null
function reFact(arr) {
    return arr.data.map(e => {
        let obj = e;
        obj.position = [e.latitude, e.longitude]
        delete obj.latitude
        delete obj.longitude
        return obj
    })
}

const getAllBusStations = () => {
    return axios
        .get("http://localhost:3000/api/bus")

};



const getAllTrainStations = () => {
    return axios
        .get("http://localhost:3000/api/trains")
};


const getAllMetroStations = () => {
    return axios
        .get("http://localhost:3000/api/stations")
};




export const getAll = (setTransport, position) => {
    Promise.all([
        getAllBusStations(), getAllMetroStations(), getAllTrainStations()
    ]).then(r => {
        let obj = {
            bus: reFact(r[0]), metro: reFact(r[1]), train: reFact(r[2])
        }
        kData = { bus: obj.bus.slice(), metro: obj.metro.slice() };
    })
    getNearbyStations(position, setTransport)
}


export const searchAllTransport = (v, setSearch) => {
    if (v) {
        axios.get(`https://nominatim.openstreetmap.org/search?q=${v}&format=json&addressdetails=1&polygon_geojson=0&countrycodes=TN&viewbox=10.0718,36.6507,10.3523,36.9168&limit=3`)
            .then(r => setSearch(r.data.map(e => e)))

    } else {
        setSearch([])
    }
}


export const getLineStations = (element, setTransport, setPossibleTp, type, mapRef, setNearestStation) => {
    const idx = element.line_number.indexOf(" ")
    let identifier = ""
    if (idx) {
        identifier = element.line_number.slice(0, idx)
    } else {
        identifier = element.line_number
    }
    let obj = {
        [type]: kData[type].filter(e => {
            if (identifier === e.line_number.slice(0, identifier.length)) {
                if (e.line_number.indexOf(" ") !== -1) {
                    if (e.line_number.indexOf(" ") === idx) {
                        return true
                    }
                }
                else if (e.line_number.indexOf(" ") === -1) {
                    if (e.line_number === identifier) {
                        return true
                    }
                }
            }

        })
    }

    let nearestStation = { distance_m: 0 }
    obj[type].forEach((element, i) => {
        userNearby[type].forEach(e => {
            if (e.idbus === element.idbus) {
                obj[type][i] = e
                if (e.distance_m > nearestStation.distance_m) {
                    nearestStation = e
                }
            }
        });
    });


    obj[type] = obj[type].filter(e => {
        if (e.line_number === nearestStation.line_number) {
            return e.station_number <= nearestStation.station_number
        } else {
            return false
        }
    })

    obj[type].reverse()

    setNearestStation(nearestStation)
    setTransport(obj)
    mapRef.current.flyTo(userLocation)
    setPossibleTp(null)

}

export const getNearbyStations = (position, setTransport, setPossibleTp) => {

    Promise.all([
        getNearbyBusStations(position), getNearbyMetroStations(position), getNearbyTrainStations(position)
    ]).then(r => {
        const bus = filter(nearby.bus, reFact(r[0]))
        const metro = filter(nearby.metro, reFact(r[1]))
        const train = filter(nearby.train, reFact(r[2]))
        nearby = { bus: bus, metro: metro, train: train };

        setTransport(nearby)
        if (!userNearby) {
            userNearby = { bus: bus.slice(), metro: metro.slice(), train: train.slice() }
        } else {
            setPossibleTp({
                bus: r[0].data.filter(e => {
                    let condition;
                    userNearby.bus.forEach(element => {
                        if (element.line_number === e.line_number) {
                            condition = true;
                        }
                    });
                    return condition;
                })
            })
        }
    })


    function filter(arr1, arr2) {
        let acc = [];
        if (arr1.length) {
            acc = arr1
            arr2.forEach(element2 => {
                let condition;
                arr1.forEach(element1 => {
                    if (element1.station_name === element2.station_name) {
                        condition = true;
                    }
                });
                if (!condition) {
                    acc.push(element2)
                }
            });
        } else {
            acc = arr2
        }
        return acc
    }
}

const getNearbyBusStations = (userLocation) => {

    return axios
        .get(`http://localhost:3000/api/bus/nearby/${userLocation[0] + "/" + userLocation[1]}`)

};
const getNearbyMetroStations = (userLocation) => {

    return axios
        .get(`http://localhost:3000/api/stations/nearby/${userLocation[0] + "/" + userLocation[1]}`)

};

export const getNearbyTrainStations = (userLocation) => {
    return axios
        .get(`http://localhost:3000/api/trains/nearby/${userLocation[0] + "/" + userLocation[1]}`)

};



// export const getNearbyMetroStations = (userlat, userlong, setNearbyMetroStations) => {
//     axios
//         .get(`/api/stations/nearby/${userlat}/${userlong}`)
//         .then((res) => setNearbyMetroStations(res.data))
//         .catch((err) => console.log(err));
// };
// export const getUserStations = (id, setUserFavourites) => {
//     axios
//         .get(`/api/favourites/${id}`)
//         .then((res) => setUserFavourites(res.data))
//         .catch((err) => console.log(err));
// };