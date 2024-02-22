import React from "react"
import "./App.css"
import {Orginals,Horror,Comedy} from './Components/urls'
import Banner from './Components/Banner/Banner'
import Poster from "./Components/Poster/Poster"
import Navbar from "./Components/Navbar/Navbar"
function App() {
 
  return (
    <div className='App'>
          <Navbar/>
          <Banner/>
          <Poster url={Orginals} title='Netflix Orginals' />
          <Poster url={Horror} title='Horror' isSmall/>
          <Poster url={Comedy} title='Comedy' isSmall/>
          
          
    </div>
  )
}

export default App