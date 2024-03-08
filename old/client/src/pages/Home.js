import React, { useState, useRef, useEffect } from 'react'
import Map from "../components/Map/Map"
import Ifc from '../components/Ifc'
import { useNavigate } from "react-router-dom";
import { auth } from '../config/firebase'
import { userLocation } from "../functions/map"
export default function Home() {
    const navigate = useNavigate();

    const [search, setSearch] = useState([])
    const [transport, setTransport] = useState({})
    const [possibleTp, setPossibleTp] = useState({})
    const mapRef = useRef();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const user = auth.currentUser;
                const token = user && (await user.getIdToken());
                console.log("token", token)
                console.log(user)

                if (!token) {
                    navigate("/login")
                }

                const payloadHeader = {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: token,
                    },
                };
                const res = await fetch("http://localhost:3001", payloadHeader);
                await res.text();
            } catch (e) {
                console.log(e);
            }
        };

        fetchData();
    }, []);


    return (
        <div className='homep'>
            <div onClick={() => mapRef.current.flyTo(userLocation)}
                style={{
                    position: "absolute", zIndex: "55555555555", width: "40px",
                    boxShadow: "0px 0px 24px 0px rgba(0,0,0,0.75)",
                    borderRadius: "100%",
                    background: "linear-gradient(to top, #09203f 0%, #537895 100%)",
                    height: "40px",
                    top: "50vh",
                    right: "2vw",
                    cursor: "pointer"
                }} />
            <div onClick={() => navigate('/profile')}
                style={{
                    position: "absolute", zIndex: "55555555555", width: "40px",
                    boxShadow: "0px 0px 24px 0px rgba(0,0,0,0.75)",
                    borderRadius: "100%",
                    background: "linear-gradient(180.3deg, rgb(221, 221, 221) 5.5%, rgb(110, 136, 161) 90.2%)",
                    height: "40px",
                    top: "50vh",
                    left: "2vw",
                    cursor: "pointer"
                }} />
            <Map setPossibleTp={setPossibleTp} possibleTp={possibleTp} transport={transport} setTransport={setTransport} mapRef={mapRef} />
            <Ifc setPossibleTp={setPossibleTp} setTransport={setTransport} mapRef={mapRef} search={search} setSearch={setSearch} />
        </div>
    )
}
