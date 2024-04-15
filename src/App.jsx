import './App.css'
import { Route, Routes } from "react-router-dom"
import { Home } from "./components/pages/Home"
import { Projects } from "./components/pages/Projects"
import { About } from './components/AboutSection/About'
import { HomePage } from './components/MainPage/HomePage'

function App() {
  return (
    <>
      <Home />
    </>
  )
}

export default App
