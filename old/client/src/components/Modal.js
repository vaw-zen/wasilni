import React from 'react'

export default function Modal({setModal}) {
    let inputV = ""
  return (
    <div style={{position:"absolute",
     height:'150px', width:'270px',
     zIndex:"5",
     borderRadius: "20px",
     transform :"translate(-50%, -50%)",
     left:"50%",
     top:"29%",
     boxShadow: "0px 0px 24px 5px rgba(0,0,0,0.75)",
     background: "linear-gradient(109.6deg, rgb(36, 45, 57) 11.2%, rgb(16, 37, 60) 51.2%, rgb(0, 0, 0) 98.6%)"
     }}>
      <input onChange={(e)=>{
            inputV=e.target.value
      }}
      style={{
             transform :"translate(-50%, -50%)",
        position:"absolute",
        left:"50%",
        top:"35%",
        fontSize:"30px",
        height:"50px",
        width:"150px",
        textAlign:"center",
        borderRadius:"5px"
      }}/>
 <h3 onClick={()=> setModal(fals)}
 style={{color:"red", position:"absolute", right:'15px', top:"-10px", cursor:"pointer"}}>
            X
        </h3>
     <button style={{
                     transform :"translate(-50%, -50%)",
                     position:"absolute",
                        left:"50%",
                        bottom:"0",
            backgroundColor:"white",
            border:"none",
            padding:"2px 5px",
            width:"100px",
            borderRadius:"10px",
            cursor:"pointer",
            background: "#aac6d8"
     }}>
       
<h1 style={{
                fontSize:"13px",

                fontStyle:"bold"

}}>Add Fav</h1>
     </button>
    </div>
  )
}