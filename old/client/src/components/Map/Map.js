
import React, { useState, useEffect, useRef } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet"
import Loading from '../Loading/Loading'
import { UserIcon, BusIcon, MetroIcon, PossibleIcon, TrainIcon, PinIcon } from "./Icons";
import { mapLocation } from "../../functions/map"
import { getAll, getLineStations } from "../../functions/stations"
import LeafletRoutingMachine from './LeafletRoutingMachine';
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";

import "./map.css"
import { latLng } from 'leaflet';

export default function Map({ mapRef, transport, setTransport, possibleTp, setPossibleTp }) {
    const mapFetched = useRef(false);
    const [position, setPosition] = useState([])
    const [destination, setDestination] = useState([])
    const [nearestStation, setNearestStation] = useState({})
    const [pin, setPin] = useState(null)
    function LocationMarker() {
        const [position, setPosition] = useState(null)
        const map = useMapEvents({
            click(e) {
                map.locate()
                setPin(Object.values(e.latlng))
            },

        })

        return pin === null ? null : (
            <Marker icon={PinIcon} position={pin}>
                <Popup><h2 style={{ cursor: "pointer", textDecoration: "underline" }}>Add Favorite</h2></Popup>
            </Marker>
        )
    }


    useEffect(() => {
        if (mapFetched.current) return;

        mapLocation(setPosition).then(e => getAll(setTransport, e));


        mapFetched.current = true;

    }, []);

    return (
        <>
            {position.length ?
                <MapContainer ref={mapRef} center={position} zoom={16} scrollWheelZoom={true} >

                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker eventHandlers={{
                        click: () => {
                            console.log(position)

                        },
                    }}
                        position={position} icon={UserIcon}>
                        <Popup >
                            <h3 style={{ textAlign: "center" }}>You are here !</h3>
                            <p style={{ textAlign: "center", fontSize: "16px" }}>
                                Look for nearby Transport in some other area by draging the Icon !</p>
                        </Popup>
                    </Marker>

                    {transport.metro && transport.metro.map((e, i) => (
                        <Marker key={i} position={e.position} icon={MetroIcon}>
                            <Popup >
                                <h3 style={{ textAlign: "center" }}>{e.station_name}</h3>
                            </Popup>
                        </Marker>
                    ))}

                    {transport.train && transport.train.map((e, i) => (
                        <Marker
                            key={i} position={e.position} icon={TrainIcon}>
                            <Popup >
                                <h3 style={{ textAlign: "center" }}>{e.station_name}</h3>
                            </Popup>
                        </Marker>
                    ))}
                    {transport.bus && transport.bus.map((e, i) => (
                        <Marker eventHandlers={{
                            click: () => {
                                console.log(e)

                            },
                        }}
                            key={i} position={e.position} icon={BusIcon}>
                            <Popup >
                                <h3 style={{ textAlign: "center" }}>{e.station_name}</h3>
                            </Popup>
                        </Marker>
                    ))}


                    {possibleTp ? possibleTp.bus && possibleTp.bus.map((e, i) => (
                        <Marker
                            eventHandlers={{
                                click: () => {
                                    getLineStations(e, setTransport, setPossibleTp, "bus", mapRef, setNearestStation)
                                    setDestination(e)
                                    console.log(e)
                                },
                            }}

                            key={i} position={e.position} icon={PossibleIcon}>
                            <Popup >
                                <h3 style={{ textAlign: "center" }}>{e.station_name}</h3>
                            </Popup>
                        </Marker>
                    )) : null}



                    {nearestStation.position ? <LeafletRoutingMachine p={[...position, ...nearestStation.position]} color={"green"} />
                        : null}
                    {nearestStation.position ? <LeafletRoutingMachine p={[...transport.bus[0].position, ...destination.position]} color={"blue"} />
                        : null}

                    <LocationMarker />

                    {/* {nearestStation.position ? transport.bus.map((e, i) => {
                        if (i === 0)
                            return (<LeafletRoutingMachine p={[...position, ...nearestStation.position]} />)
                        else if (i !== transport.bus.length - 1) {
                            // return (<LeafletRoutingMachine p={[...e.position, ...transport.bus[i + 1].position]} />)
                        } else {
                            return ""
                        }
                    })
                        : null} */}
                </MapContainer> : <Loading />}
        </>
    )
}
