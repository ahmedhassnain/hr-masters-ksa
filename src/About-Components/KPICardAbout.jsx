import KPIAboutData from './KPIAboutData.js'
import './KPICardAbout.css'

export default function KPICardAout({ startingKPI }) {

    // const displayKPIs = KPIData.slice(startingIndex, startingIndex + 4)
    const showKPIs = KPIAboutData.slice(startingKPI, startingKPI + 4)

    return (
            showKPIs.map((eachKPI) => (
                <div className = "kpi-about-container" style = {{backgroundColor: eachKPI.backgroundColor, transition: "all 0.2s ease"}}>
                    <h1>{eachKPI.heading}</h1>
                    <p>{eachKPI.description}</p>
                </div>
            ))
    )
}