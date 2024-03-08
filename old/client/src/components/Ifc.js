import React from 'react'
import Inputs from './Inputs'
import Choices from './Choices/Choices'
export default function Ifc({ search, setSearch, mapRef, setTransport, setPossibleTp }) {
  return (

    <div style={{
      position: "absolute", bottom: "0",
      width: "100vw",
      height: "40vh",
      zIndex: "1",
      backgroundColor: "#44718f",
      color: "white",
      borderRadius: '20px 20px 0 0',
      textAlign: "center",
      
    }}>
      <Inputs setPossibleTp={setPossibleTp} setTransport={setTransport} mapRef={mapRef} search={search} setSearch={setSearch} />

      <Choices />
    </div>
  )
}
