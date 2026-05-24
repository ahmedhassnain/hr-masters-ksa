import './CardComponent.css'
import React from 'react'
import bottomDesignCard from "../assets/card-component-bottom.png" 
import CardData from './CardComponentData.js'
import cardOne from '../assets/card-component-one.png'
import cardTwo from '../assets/card-component-two.png'
import cardThree from '../assets/card-component-three.png'

export default function CardComponent( { scrollIntoView, changePage } ) {

    const [hoveredIndex, setHoveredIndex] = React.useState(null)
    const mobileView = window.innerWidth <= 500;
    const backgroundImageCol = [cardOne, cardTwo, cardThree]
    const backgroundColorCol = ["#", "#F15867", "#F15867"]

    
    const getCardStyle = (index, hoveredIndex, backgroundImage) => {
        const base = {
            position: 'absolute',
            top: `calc(25px + ${index * 30}px)`,
            zIndex: 10 - index,
            transition: 'all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)',
            ...(mobileView ? { background: `url(${backgroundImageCol[index]})` } : { backgroundImage: `url(${backgroundImageCol[index]})` })
        };

        if (hoveredIndex === null) return base;

        if (index === hoveredIndex) {
            return { ...base, top: `calc(25px + ${index * 30}px - 20px)`, zIndex: 20 };
        }

        if (index < hoveredIndex) {
            const distance = hoveredIndex - index;
            return { ...base, top: `calc(25px + ${index * 30}px - ${distance * 10}px)` };
        }

        if (index > hoveredIndex) {
            const distance = index - hoveredIndex;
            return { ...base, top: `calc(25px + ${index * 30}px + ${distance * 10}px)` };
        }
        
    };


    return (
        <div className="card-stack">
            {CardData.map((eachCard) => (
                <div
                    key={eachCard.id}
                    className = "individual-card"
                    style = {getCardStyle(eachCard.id, hoveredIndex, cardOne)}
                    onMouseEnter={() => setHoveredIndex(eachCard.id)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <div className = "top-row-card">
                        <button onClick = {eachCard.id == 0 ? scrollIntoView : eachCard.id == 1 ? () => changePage("About") : () => changePage("Contact")} className = "welcome-button">{eachCard.buttonText}</button>
                        <h3>{eachCard.topText}</h3>
                    </div>
                    <div className= "bottom-row-card">
                        <h1>{eachCard.bottomText}</h1>
                    </div>
                </div>
            ))}
        </div>
    )
}