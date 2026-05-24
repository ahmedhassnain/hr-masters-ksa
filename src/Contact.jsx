import "./Contact.css"
import React from "react"
import logoLinkedIn from "./assets/linkedin-logo.png"
import logoEmail from "./assets/mail-logo.png"
import logoPhone from "./assets/telephone-logo.png"
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { motion } from "framer-motion"
import Footer from "./Footer.jsx"


export default function Contact() {

    const textRef = React.useRef();
    const [currentText, setCurrentText] = React.useState("");

    React.useEffect(() => {
        document.body.style.backgroundColor = "#336E74"
    }, [])

    React.useEffect(() => {
        if (textRef.current) {
            textRef.current.style.height = "150px";
            textRef.current.style.height = `${textRef.current.scrollHeight}px`;
        }
    }, [currentText])

    const fadeSection = {
        hidden: {opacity: 0, y: 60},
        visible: {opacity: 1, y: 0}
    }

    function redirectLinkedIn() {
        window.open("https://www.linkedin.com/company/hr-masters-ksa", "_blank")
    }

    return (
        <>
        <div 
            className = "contact-section-one"
        >

            <motion.div 
                className = "heading-contact-s1"
                variants = {fadeSection}
                initial = "hidden"
                animate = "visible"
                transition = {{ duration: 0.3, ease: "easeOut"}}
            >
                <h1>Contact Us</h1>
                <p>Whether you're scaling your workforce or exploring how HR support could benefit your organization, we'll be here to help. Share your requirements and we'll respond within 24 hours.</p>
            </motion.div>

            <motion.form 
                className = "form-component-contact"
                variants = {fadeSection}
                initial = "hidden"
                animate = "visible"
                transition = {{ duration: 0.3, ease: "easeOut"}}
            >
                <div className = "individual-item-form item-form-1">
                    <h1>Full Name:</h1>
                    <input className = "input-form" placeholder = "&gt; Full Name"/>
                </div>
                <div className = "individual-item-form item-form-2">
                    <h1>Company Name:</h1>
                    <input className = "input-form" placeholder = "&gt; Company Name" />
                </div>
                <div className = "individual-item-form item-form-3">
                    <h1>Email Address:</h1>
                    <input className = "input-form" placeholder = "&gt; Email Address" />
                </div>
                <div className = "individual-item-form item-form-4">
                    <h1>Phone Number: </h1>
                    <input className = "input-form" placeholder = "&gt; Phone Number" />
                </div>
                <div className = "individual-item-form item-form-5">
                    <h1>Tell Us More: </h1>
                    <textarea onChange = {(e) => setCurrentText(e.target.value)} ref = {textRef} className = "text-area-form" placeholder = "&gt; What positions are you looking to fill? what challenges are you facing? tell us all about it." />
                </div>

                <div className = "button-container">
                    <button type = "submit">Submit</button>
                </div>
            </motion.form>
        </div>

            <div className = "contact-section-two">

                <motion.div 
                    className = "heading-contact-s2"
                    variants = {fadeSection}
                    initial = "hidden"
                    whileInView = "visible"
                    viewport = {{ once: false, amount: 0.2}}
                    transition = {{ duration: 0.6, ease: "easeOut"}}
                >
                    <h1>Elsewhere</h1>
                    <p>For when you want to get in touch, and be able to contact us right away.</p>
                </motion.div>

                <motion.div 
                    className = "social-contacts-s2"
                    variants = {fadeSection}
                    initial = "hidden"
                    whileInView = "visible"
                    viewport = {{ once: false, amount: 0.2}}
                    transition = {{ duration: 0.3, ease: "easeOut"}}
                >   
                    <CopyToClipboard text="info@hrmastersksa.com" onCopy={() => alert("Email copied to your clipboard!")}>
                        <div className = "social-contact-line">
                            {/* <CopyToClipboard text="info@hrmastersksa.com" onCopy={() => alert("Email copied to your clipboard!")}> */}
                                <div className = "left-panel-scs2">
                                    <img src = {logoEmail} />
                                </div>
                                <div className = "right-panel-scs2">
                                    <h1>info@hrmastersksa.com</h1>
                                </div>
                            {/* </CopyToClipboard> */}
                        </div>
                    </CopyToClipboard>
                    <div onClick = {() => redirectLinkedIn()} className = "social-contact-line">
                        <div className = "left-panel-scs2">
                            <img src = {logoLinkedIn} />
                        </div>
                        <div className = "right-panel-scs2">
                            <h1>HR Masters KSA</h1>
                        </div>
                    </div>
                    <CopyToClipboard text="+966 50 341 2812" onCopy={() => alert("Phone Number copied to your clipboard!")}>
                        <div className = "social-contact-line">
                            <div className = "left-panel-scs2">
                                    <img src = {logoPhone} />
                            </div>
                            <div className = "right-panel-scs2">
                                    <h1>+966 50 341 2812</h1>
                            </div>
                        </div>
                    </CopyToClipboard>
                </motion.div>

        </div>
        
        </>
    )
}