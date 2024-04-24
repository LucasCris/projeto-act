import { useState } from 'react'
import AppRoutes from "./Routes/routes"
import Header from "./Header/Header"
import Footer from "./Footer/Footer"
import './App.css'

function App() {
  return (
    <>
        <Header/>
        <AppRoutes/>
        <Footer/>
    </>
  )
}

export default App
