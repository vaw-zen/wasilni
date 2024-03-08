import React from 'react'
import "./loading.css"
export default function Loading() {
    return (
        <div style={{ width: "100vw", height: "100vh" }}>
            <div className='loading-container'>
                &nbsp;
                <div className="loading"><div></div><div></div><div></div><div></div></div>
            </div>
        </div>
    )
}
