import './Navbar.css'
import logoHRMasters from "./assets/logo-hr-masters.png"
import { Link } from 'react-router-dom'


export default function Navbar({ backgroundColor, changePage }) {
    return (
        <nav style = {{backgroundColor: backgroundColor}}>
            <ul className = "links-pages">
                <li onClick = {() => changePage("Home")}>Home</li>
                <li onClick = {() => changePage("About")}>About</li>
                <li onClick = {() => changePage("Contact")}>Contact</li>
            </ul>
            <img src = {logoHRMasters}/>
        </nav>
    )
}