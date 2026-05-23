import CardDropdownData from "./CardDropdownData.js"
import React from 'react'
import './CardDropdown.css';

export default function CardDropdown() {

    const [expandedIndex, getExpandedIndex] = React.useState(null)
    const [expandedState, getExpandedState] = React.useState(false)

    function setStyling(id) {
        //For Opening a Card while another Card is Open
        if (id !== expandedIndex) {
            getExpandedState(false)
            getExpandedIndex(null)
        }
        getExpandedIndex(id)
        getExpandedState((prevState) => !prevState)
    }

    return (
        CardDropdownData.map((eachCardData) => 
            <div className = "trust-card-container" >
                <div className = "top-trust-card"
                style = {{display: "flex", flexDirection: "column", gap: "20px"}}
                >
                <h1>{eachCardData.title}</h1>
                <h3 style={{ maxHeight: expandedState && expandedIndex === eachCardData.id ? "150px" : "0px", overflow: "hidden", transition: "max-height 0.3s ease" }}>{eachCardData.description}</h3>
            </div>
                <div className = "bottom-trust-card">
                    <button onClick = {() => setStyling(eachCardData.id)}>{eachCardData.id == expandedIndex && expandedState == true ? "▼" : "▲"}</button>
                </div>
            </div>
        )
    )
}