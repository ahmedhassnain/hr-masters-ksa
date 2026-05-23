import AboutComponents from './AboutComponents.js'
import './AboutComponent.css'

export default function AboutComponent() {

    const duplicateContent = [...AboutComponents, ...AboutComponents]

    return (
        duplicateContent.map((eachComponent) => (
            <div className = "each-scroll-item">
                <h1>{eachComponent.title}</h1>
                <p>{eachComponent.description}</p>
            </div>
        ))
    )
}