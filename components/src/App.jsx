import React from 'react'
import Navbar from './components/Navbar.jsx'
import Main from './components/Main.jsx'
import Sidebar1 from './components/Sidebar1.jsx'
import Sidebar2 from './components/Sidebar2.jsx'
import Footer from './components/Footer.jsx'
import global from './components/global.css'
export default function App() {
  return (
    <div>
      <Navbar/>
      <Main></Main>
      <div className='side'>
      <Sidebar1></Sidebar1><Sidebar2></Sidebar2>
      </div>
      <Footer/>
    </div>
  )
}

