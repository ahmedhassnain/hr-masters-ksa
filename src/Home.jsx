import CardComponent from './Home-Components/CardComponent.jsx'
import KPIComponent from './Home-Components/KPIComponent'
import CardDropdown from './Home-Components/CardDropdown.jsx'
import FactCards from './Home-Components/FactCards.jsx'
import Footer from './Footer.jsx'
import SearchBg from './assets/group-21.png'
import React from 'react'
import { motion } from 'framer-motion'
import './Home.css'


const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 }
}

const fadeUpFurther = {
    hidden: { opacity: 0, y: 0 },
    visible: { opacity: 1, y: -15}
}

export default function Home({ colorScheme }) {

    React.useEffect(() => {
                document.body.style.backgroundColor = "#1D3F64"
            }, [])

    
    const [startingIndex, setStartingIndex] = React.useState(0)


    return (
        <div className = "home-container">

            {/* Section 1 */}
            <motion.div
                className = "section-one"
                style = {{backgroundColor: colorScheme}}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.3, ease: "easeOut" }}
            >
                <CardComponent />
            </motion.div>

            {/* Section 2 */}
            <div className = "section-two" style = {{backgroundColor: colorScheme}}>
                <motion.div
                    className = "heading-section-two"
                    variants={fadeUpFurther}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: false, amount: 0.8 }}
                >
                    <h1>What We Do</h1>
                    <p>We design comprehensive workforce solutions tailored to your business needs.</p>
                </motion.div>
                <motion.div
                    className = "bottom-section-two"
                    variants={fadeUpFurther}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                    viewport={{ once: false, amount: 0.3 }}
                >
                    <button onClick = {() => setStartingIndex(prevIndex => prevIndex - 2)} disabled = {startingIndex == 0} className = "move-left">&lt;</button>
                    <div className = "grid-section-two" >
                        <KPIComponent startingIndex = {startingIndex}/>
                    </div>
                    <button onClick = {() => setStartingIndex(prevIndex => prevIndex + 2)} disabled = {startingIndex == 4} className = "move-right">&gt;</button>
                </motion.div>
            </div>

            {/* Section 3 */}
            <div className = "section-three" style = {{backgroundColor: colorScheme}}>
                <motion.div
                    className = "heading-section-three"
                    variants={fadeUpFurther}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: false, amount: 0.3 }}
                >
                    <h1>Trust and Why?</h1>
                    <p>Why companies around Saudi Arabia have been placing their trust in us and why you should as well.</p>
                </motion.div>

                <motion.div
                    className = "card-dropdown"
                    variants={fadeUpFurther}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <div className = "panel-left">
                        <CardDropdown />
                    </div>
                    <div className = "panel-right">
                        <FactCards />
                    </div>
                </motion.div>
            </div>

            {/* Section 4 */}
            <div className = "section-four-wrapper">
                <div className = "section-four" style = {{backgroundColor: colorScheme}}>
                    <motion.div
                        className = "heading-s4"
                        variants={fadeUpFurther}
                        initial="hidden"
                        whileInView="visible"
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: false, amount: 0.4 }}
                        style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
                    >
                        <h1>Start Your Hire.</h1>
                        <div className = "search-effect">
                            <p>Discuss your workforce needs with us so we can help you build a team that drives results.</p>
                            <button className = "get-button">Get In Touch &gt;</button>
                        </div>
                    </motion.div>
                </div>
                <Footer />
            </div>
        </div>
    )
}
