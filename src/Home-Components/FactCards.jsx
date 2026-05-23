import "./FactCards.css"
import React from "react"
import FactCardsData from "./FactCardsData.js"

export default function FactCards() {

    const [currentIndex, setCurrentIndex] = React.useState(0)
    const filterFactCard = FactCardsData[currentIndex];

    React.useEffect(() => {
        if (currentIndex < 3) {
            const timer = setTimeout(() => {
            setCurrentIndex((prevIndex) => prevIndex + 1)
            }, 4000);

            return () => clearTimeout(timer);
        }
        else {
            const timer = setTimeout(() => {
            setCurrentIndex(0)
            }, 4000);

            return () => clearTimeout(timer);
        }

    }, [currentIndex])

    
    return (
        <div className = "fact-card-container">
            <div className = "top-panel-fact-card">
                <button>{filterFactCard.id + 1} &gt;</button>
            </div>
            <div className = "bottom-panel-fact-card" >
                <h1 className = "bottom-main-content">Fact</h1>
                <p key = {filterFactCard.content} className = "bottom-main-content" style = {{transition: "all 0.1s ease" }}>{filterFactCard.content}</p>
            </div>
        </div>
    )
}