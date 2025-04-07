import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import Dashboard from './components/DashBoard.jsx'

function App() {


  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header/>
      <Dashboard/>
      <Footer />
    </div>
     
  )
}

export default App
