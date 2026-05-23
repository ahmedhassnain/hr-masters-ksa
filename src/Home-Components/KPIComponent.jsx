import KPIData from './KPIData.js'
import './KPIComponent.css'

export default function KPIComponent({ startingIndex }) {

    const displayKPIs = KPIData.slice(startingIndex, startingIndex + 4)

    return (
            displayKPIs.map((eachKPI) => (
                <div className = "kpi-container" style = {{backgroundColor: eachKPI.backgroundColor, transition: "all 0.2s ease"}}>
                    <h1>{eachKPI.heading}</h1>
                    <p>{eachKPI.description}</p>
                </div>
            ))
    )
}