import { useState } from 'react'
import './App.css'

function App() {
  
  let [counter, setCounter]= useState(0)
  
  // let counter = 5
  // let show=0;

 // Intreview part
  const addValue = () => {

    // setCounter(counter+1)          // only update by because of  multiple time update on same value so it bundle the all batch and update after some time 
    // setCounter(counter+1)
    // setCounter(counter+1)
    // setCounter(counter+1)

    // solution: in setCounter we get callback 
    // setCounter((c)=>c + 3)

    setCounter((counter) => counter+1)      // it is like .then chaining 
    setCounter(counter => counter+1)
    setCounter(counter => counter+1)
    setCounter(counter => counter+1)
  }

  // const addValue = () => {
  //   if(counter == 20){
  //     setCounter(counter)
  //     alert("This can't go above 20")
  //   }else{
  //     counter++
  //     setCounter(counter)
  //     console.log(counter);
  //   }
  // }

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
      <button onClick={addValue}>Add Value</button>
      <br/>
      <button onClick={removeValue}>Remove Value </button>
      <br/>
    </>
  )
}

export default App
