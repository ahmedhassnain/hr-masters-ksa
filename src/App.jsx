import Navbar from './Navbar'
import './App.css'
import Home from './Home.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'
import Footer from './Footer.jsx'
import React from 'react'

export default function App() {

  const [currentPage, setCurrentPage] = React.useState("Home")
  const [colorScheme, setColorScheme] = React.useState("#1D3F64")


  function changePage(pageInfo) {
    if (pageInfo == "Home") {
      setCurrentPage("Home")
      setColorScheme("#1D3F64")
    }
    else if (pageInfo == "About") {
      setCurrentPage("About")
      setColorScheme("#5F2838")
    }
    else if (pageInfo == "Contact") {
      setCurrentPage("Contact")
      setColorScheme("#336E74")
    }
  }

  return (
    <>
      <Navbar backgroundColor = {colorScheme} changePage = {changePage}/>

      {currentPage == "Home" ? <Home changePage = {changePage} colorScheme = {colorScheme}/> : currentPage == "About" ? <About changePage = {changePage} colorScheme = {colorScheme} /> : <Contact colorScheme = {colorScheme} />}

      <Footer changePage = {changePage}/>

    </>
  )
}
