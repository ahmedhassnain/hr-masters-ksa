import "./About.css"
import TopCardWallet from "./assets/wallet-card-one-small.png" 
import KPICardAbout from "./About-Components/KPICardAbout.jsx"
import Footer from "./Footer.jsx"
import React from 'react'
import AboutComponent from "./About-Components/AboutComponent.jsx"
import { motion } from "framer-motion"

export default function About({ colorScheme }) {

        React.useEffect(() => {
            document.body.style.backgroundColor = "#5F2838"
        }, [])

    const [expandedState, setExpandedState] = React.useState(false)
    const [expandedId, setExpandedId] = React.useState(null)
    const isMobile = window.innerWidth <= 500

    function adjustSectionHeight() {
        if (isMobile) {
            return { height: "105vh", transition: "height 0.2s ease" }
        }

        if (expandedId == 1 && expandedState == true) {
            return {height: "150vh", transition: "height 0.2s ease"}
        }
        else if (expandedId == 2 && expandedState == true) {
            return {height: "160vh", transition: "height 0.2s ease"}
        }
        else {
            return {height: "135vh", transition: "height 0.2s ease"}
        }
    }

        const setStyle = (id) => {
        const positions = {
            1: { collapsed: 40, expanded: 70 },
            2: { collapsed: 48, expanded: 80 }
        }
        
        const pos = positions[id]
        if (!pos) return {}
        
        const isOpen = expandedId === id && expandedState
        return { 
            top: `${isOpen ? pos.expanded : pos.collapsed}vh`, 
            transition: "top 0.2s ease" 
        }
        }

        const [startingKPI, setStartingKPI] = React.useState(0);

        const fadeSection = {
            hidden: { opacity: 0, y: 60 },
            visible: { opacity: 1, y: 0 }
        }

    return (
        <>
        <div 
            style = {adjustSectionHeight()} 
            className = "about-section-one"
        >
            <motion.div 
            className = "heading-about-s1"
            variants = {fadeSection}
            initial = "hidden"
            animate = "visible"
            transition = {{duration: 0.3, ease : "easeIn"}}
            >
                <h1>About Us</h1>
                <p>The story behind our vision of building Saudi Arabia's next workforce.</p>
            </motion.div>
                    
            <motion.div 
                className = "wallet-card-component"
                variants = {fadeSection}
                initial = "hidden"
                animate = "visible"
                transition = {{duration: 0.3, ease : "easeIn"}}
            >
                <motion.div 
                    style = {{ backgroundImage: `url(${TopCardWallet})`}} 
                    className = "wallet-card top-wallet-card"
                    variants = {fadeSection}
                    initial = "hidden"
                    whileInView = "visible"
                    viewport= {{once: false, amount: 0.2}}
                    transition = {{duration: 0.3, ease : "easeOut"}}
                >
                    <h1 className = "heading-top-card">Our Story</h1>
                    <div className = "paragraph-div">
                    <p className = "paragraph">What started as a venture on a random discussion between Saudis, Pakistanis, and Canadians now focuses of finding talent that can contribute to the Vision 2030 set by the government.</p> 
                    <p className = "paragraph p-1">Our goal was and has always been to provide organizations individuals that understand the local context and bring global expertise.</p>
                    </div>
                </motion.div>
                <motion.div 
                    style = {setStyle(1)} 
                    className = "wallet-card inside-wallet-one"
                    variants = {fadeSection}
                    initial = "hidden"
                    whileInView = "visible"
                    viewport= {{once: false, amount: 0.2}}
                    transition = {{duration: 0.4, ease : "easeIn"}}
                >
                    <div className = "top-inside-wallet-one">
                        <h1>Driving Force</h1>
                        <p>Our driving force is seeing the impact of the right hire fitting a company's requirements exactly. That's exactly what we strive on, to deliver again and again.</p>
                    </div>
                    <div className = "bottom-inside-wallet-one">
                        <button onClick = {() => {setExpandedId(1); setExpandedState((prevState) => !prevState)}}>{expandedState && expandedId == 1 ? "▲" : "▼"}</button>
                    </div>
                </motion.div>

                <motion.div 
                    style = {setStyle(2)} 
                    className = "wallet-card inside-wallet-two"
                    variants = {fadeSection}
                    initial = "hidden"
                    whileInView = "visible"
                    viewport= {{once: false, amount: 0.2}}
                >
                    <div className = "top-inside-wallet-two">
                        <div className = "left-top-w2">
                            <h1>E-POST CARD</h1>
                        </div>
                        <div className = "right-top-w2">
                            <p>Riyadh, Saudi Arabia</p>
                            <p>Sent From: Malaysia</p>
                        </div>
                    </div>
                    <div className = "bottom-inside-wallet-two">
                        <button onClick = {() => {setExpandedId(2); setExpandedState((prevState) => !prevState)}}>{expandedState && expandedId == 2 ? "▲" : "▼"}</button>
                    </div>

                </motion.div>
                <div style = {{backgroundImage: `url(${TopCardWallet})`}} className = "wallet-card back-wallet-card">
                    
                </div>
            </motion.div>
        </div>

        <div className = "about-section-two">
            <motion.div 
                className = "heading-about-s2"
                variants = {fadeSection}
                initial = "hidden"
                whileInView = "visible"
                viewport = {{ once: false, amount: 0.8}}
                transition = {{duration: 0.3, ease: "easeOut"}}
            >
                <h1>Our Values</h1>
                <p>The principles that are guiding every placement decision we are making.</p>
            </motion.div>
            
            <motion.div 
                className = "bottom-about-s2"
                variants = {fadeSection}
                initial = "hidden"
                whileInView = "visible"
                viewport = {{ once: false, amount: isMobile ? 0.2 : 0.4}}
                transition = {{duration: 0.3, ease: "easeOut"}}
            >
                <button className = "move-left-s2" onClick = {() => setStartingKPI((prevNumber) => prevNumber - 1)} disabled = {startingKPI == 0}>&lt;</button>
                <div className = "grid-about-s2" >
                    <KPICardAbout startingKPI = {startingKPI}/>
                </div>
                <button className = "move-right-s2" onClick = {() => setStartingKPI((prevNumber) => prevNumber + 1)} disabled = {startingKPI == 6}>&gt;</button>
            </motion.div>
        </div>

        

        <div className = "about-section-three">
            <motion.div 
                className = "heading-about-s3"
                variants = {fadeSection}
                initial = "hidden"
                whileInView = "visible"
                viewport = {{ once: false, amount: 0.2}}
                transition = {{duration: 1.2, ease: "easeOut"}}
            >
                <h1>The Difference.</h1>
                <p>What we are doing different as compared to our competitors and why you should consider us.</p>
            </motion.div>
            <motion.div 
                className = "bottom-about-s3"
                variants = {fadeSection}
                initial = "hidden"
                whileInView = "visible"
                viewport = {{ once: false, amount: 0.2}}
                transition = {{duration: 1.2, ease: "easeOut"}}
            >
                <div className = "marquee-tracking-s3">
                    <AboutComponent />
                </div>
            </motion.div>
        </div>

        <div className = "section-four-wrapper">
            <motion.div 
                className = "about-section-four"
                variants = {fadeSection}
                initial = "hidden"
                whileInView = "visible"
                viewport = {{ once: false, amount: 0.3}}
                transition = {{duration: 0.2, ease: "easeOut"}}
            >
                <h1>Make The Move.</h1>
                <div className = "search-effect-about">
                    <p>Discuss your workforce needs with us so we can help you build a team that drives results.</p>
                    <button>Get In Touch &gt;</button>
                </div>
            </motion.div>

            <Footer />
        </div>
        </>
    )
}