import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    username:"Shivam Singh",
    age: 21
  }

  let newArr = [1, 2, 3, 4]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind Test</h1>
      <Card btnText = 'click me'/>
      <Card username = {myObj.username}/>
      <Card username = "Shivam"/>
    </>
  )
}

export default App
