import { useState } from 'react'
import './App.css'
import Header from '../Header/Header'
import Home from './Home'
import Footer from '../Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Home/>
      <Footer/>
    </>
  )
}

export default App
