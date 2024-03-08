
import React from 'react'
import Choice from './Choice'

export default function Choices() {
    const transports = ["Trains", "Metros", "Bus"]
    return (
        <div style={{
            position: "absolute", transform: 'translate(-50%)', left: "50%",
            width: "75%",
            height: "23vh",
            position: "absolute",
            bottom: "0",
            zIndex: "-1",
            display: "flex",
            justifyContent: "space-between"
        }}>

            <Choice transportName={"Trains"} imgUrl={"https://cdn.discordapp.com/attachments/1073737355896299542/1075760768374546472/icons8-train-64.png"} />
            <Choice transportName={"Metro"} imgUrl={"https://cdn.discordapp.com/attachments/1073737355896299542/1075752091936624640/icons8-high-speed-train-100.png"} />
            <Choice transportName={"Bus"} imgUrl={"https://cdn.discordapp.com/attachments/1073737355896299542/1075752091936624640/icons8-high-speed-train-100.png"} />

        </div >
    )
}
