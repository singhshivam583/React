import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("Olive")


  return (
      <div id='color' className='w-full h-screen duration-200' 
      style={{backgroundColor: color}}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-3 rounded-3xl'>
              <button className='outline-none text-white px-4 py-1 rounded-full '
              style={{backgroundColor:'red' }}
              onClick={()=>{setColor('red')}}>
                Red
              </button>
              <button className='outline-none text-white px-4 py-1 rounded-full '
              style={{backgroundColor:'green' }}
              onClick={()=>{setColor('green')}}>
                Green
              </button>
              <button className='outline-none text-white px-4 py-1 rounded-full '
              style={{backgroundColor:'blue' }}
              onClick={()=>{setColor('blue')}}>
                Blue
              </button>
              <button className='outline-none text-white px-4 py-1 rounded-full '
              style={{backgroundColor:'olive' }}
              onClick={()=>{setColor('olive')}}>
                Olive
              </button>
              <button className='outline-none text-white px-4 py-1 rounded-full '
              style={{backgroundColor:'purple' }}
              onClick={()=>{setColor('purple')}}>
                Purple
              </button>
              <button className='outline-none text-white px-4 py-1 rounded-full '
              style={{backgroundColor:'maroon' }}
              onClick={()=>{setColor('maroon')}}>
                Maroon
              </button>
              <button className='outline-none text-white px-4 py-1 rounded-full '
              style={{backgroundColor:'grey' }}
              onClick={()=>{setColor('grey')}}>
                Grey
              </button>
          </div>
        </div> 
      </div>
  )
}

export default App
