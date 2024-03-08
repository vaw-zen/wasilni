import React from 'react'

export default function Choice({ imgUrl }) {
    return (
        <div style={{
            height: "13vh",
            width: "13vh", borderRadius: "20px", color: "black",
            background: "rgba(255, 255, 255, 0.2)",
            boxShadow: " 0 4px 30px rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(5px)",
        }}>
            <div style={{
                width: "100%", height: "65%", borderRadius: "20px 20px 0 0",
                backgroundImage: `url('${imgUrl}')`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "50%",
                backgroundPosition: "center"
            }}>

            </div>
            <div style={{
                width: "100%", height: "35%", borderRadius: "0 0 20px 20px",
                color: "white", fontSize: "30px", fontFamily: "'Righteous', cursive"
            }}>
                Trains
            </div>
        </div>
    )
}
