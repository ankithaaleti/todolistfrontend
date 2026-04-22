import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import FirstComponent from './components/FirstComponent/'
import SecondComponent from './components/SecondComponent/'
import MainPage from './components/MainPage/'
import Header from './components/Header/'
import SideBar from './components/SideBar/'
import Footer from './components/Footer/'
import Todolist from './components/Todolist/'
function App() {
  return (
    <div className="app">
      {/* <Header/> */}
      {/* <MainPage/> */}
      {/* <SideBar/> */}
      {/* <Footer/> */}
      <Todolist/>
    </div>
  )
}

export default App
