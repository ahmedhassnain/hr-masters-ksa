import './Footer.css'
import logoHRMasters from "./assets/logo-hr-masters.png"
import logoLinkedIn from "./assets/linkedin-logo.png"
import logoEmail from "./assets/mail-logo.png"
import logoPhone from "./assets/telephone-logo.png"

export default function Footer({ className }) {
    return (
        <div className = {`footer-container ${className || ""}`}>
            <div className = "footer-row-one">
                <div className = "section-one-r1">
                    <img src = {logoHRMasters} />
                    <h3>Strategic workforce solutions for Saudi Arabia's growing businesses.</h3>
                </div>
                <div className = "section-two-r1">
                    <h3>CONTACT</h3>
                    <div className = "list-of-header">
                        <h4>+966 50 341 2812</h4>
                        <h4>info@hrmastersksa.com</h4>
                        <h4>Riyadh, Saudi Arabia</h4>
                    </div>
                </div>
                <div className = "section-three-r1">
                    <h3>Quick Links</h3>
                    <ul className = "list-of-header lih-2">
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
            <div className = "footer-row-two">
                <div className = "social-link social-link-one">
                    <img src = {logoLinkedIn} />
                </div>
                <div className = "social-link social-link-two">
                    <img src = {logoEmail} />
                </div>
                <div className = "social-link social-link-three">
                    <img src = {logoPhone} />
                </div>
            </div>
            <div className = "footer-row-three">
                <div className = "divider"></div>
            </div>
            <div className = "footer-row-four">
                <div className = "copyright-bottom">
                    <p>© 2026 HR Masters, KSA. All Rights Reserved.</p>
                </div>
            </div>
        </div>
    )
}