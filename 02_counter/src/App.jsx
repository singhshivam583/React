import { useState } from 'react'
import './App.css'

function App() {
  
  let [counter, setCounter]= useState(0)
  
  // let counter = 5
  // let show=0;

  const addValue = () => {
    if(counter == 20){
      setCounter(counter)
      alert("This can't go above 20")
    }else{
      counter++
      setCounter(counter)
      console.log(counter);
    }
  }

  const removeValue = () => {
    if(counter == 0){
        setCounter(counter)
        alert("This can't be negative")
    }else{
      counter--
      setCounter(counter)
      console.log(counter);
    }
  }
  
  // const display = (counter) => {
  //   if(counter >= 10){
  //     show = "9+"
  //   }else{
  //     show = counter
  //   }
  // }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={addValue}>Add Value</button><br/>
      <button onClick={removeValue}>Remove Value </button>
    </>
  )
}

export default App
