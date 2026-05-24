import './Footer.css'
import logoHRMasters from "./assets/logo-hr-masters.png"
import logoLinkedIn from "./assets/linkedin-logo.png"
import logoEmail from "./assets/mail-logo.png"
import logoPhone from "./assets/telephone-logo.png"
import { CopyToClipboard } from 'react-copy-to-clipboard'

export default function Footer({ className, changePage }) {
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
                        <CopyToClipboard text="+966 50 341 2812" onCopy={() => alert("Phone Number copied to your clipboard!")}>
                            <h4>+966 50 341 2812</h4>
                        </CopyToClipboard>
                        <CopyToClipboard text="info@hrmastersksa.com" onCopy={() => alert("Email copied to your clipboard!")}>
                            <h4>info@hrmastersksa.com</h4>
                        </CopyToClipboard>
                        <h4>Riyadh, Saudi Arabia</h4>
                    </div>
                </div>
                <div className = "section-three-r1">
                    <h3>Quick Links</h3>
                    <ul className = "list-of-header lih-2">
                        <li onClick = {() => changePage("Home")}>Home</li>
                        <li onClick = {() => changePage("About")}>About</li>
                        <li onClick = {() => changePage("Contact")}> Contact</li>
                    </ul>
                </div>
            </div>
            <div className = "footer-row-two">
                <div onClick = {() => window.open("https://www.linkedin.com/company/hr-masters-ksa", "_blank")} className = "social-link social-link-one">
                    <img src = {logoLinkedIn} />
                </div>

                <CopyToClipboard text="info@hrmastersksa.com" onCopy={() => alert("Email copied to your clipboard!")}>
                    <div className = "social-link social-link-two">
                        <img src = {logoEmail} />
                    </div>
                </CopyToClipboard>

                <CopyToClipboard text="+966 50 341 2812" onCopy={() => alert("Phone Number copied to your clipboard!")}>
                    <div className = "social-link social-link-three">
                        <img src = {logoPhone} />
                    </div>
                </CopyToClipboard>
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