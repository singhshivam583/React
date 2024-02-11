import { useState, useCallback, useEffect, useRef} from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password , setPassword] = useState("");
  // Ref Hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
      let pass =""
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

      if (numAllowed) str += "0123456789";
      if (charAllowed) str += "!@#$%^&*-_+=()[]{}~`";

      for (let i = 1; i < length; i++) {
        let char = Math.floor(Math.random()*str.length + 1)
        pass += str.charAt(char)
      }
      setPassword(pass)

  }, [length, numAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    // passwordRef.current?.setSelectionRange(0, 5)
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numAllowed, charAllowed, passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700'>
        <h1 className='text-white text-center text-4xl my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
            type='text'
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='Password'
            readOnly
            ref={passwordRef}
          />
          <button 
          onClick={copyPasswordToClipboard}
          className='outline-none bg-blue-700 text-center hover:bg-blue-800 text-white px-3 py-1 shrink-0'>
            Copy
          </button>
        </div>
        <div className='flex text-sm gap-x-2 shadow overflow-hidden mb-4'>
          <div className='flex items-center gap-x-1'>
            <input
              // onClick={passwordGenerator}
              type='range'
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => {setLength(e.target.value)}}
            />
            <lebel className='w-20'>Length : ({length})</lebel>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              // onClick={passwordGenerator}
              type='checkbox'
              defaultChecked = {numAllowed}
              id='numberInput'
              onChange={() => {
                setNumAllowed((prev) => !prev);
              }}
            />
            <lebel>Numbers</lebel>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              // onClick={passwordGenerator}
              type='checkbox'
              defaultChecked = {charAllowed}
              id='charInput'
              // onChange={() => {
              //   setCharAllowed((prev) => !prev);
              // }}
              onClick={() => setCharAllowed(!charAllowed)}

            />
            <lebel>Characters</lebel>
          </div>
        </div>
        <div className='flex items-center justify-center'>
            <button  
              onClick={passwordGenerator}
              className='outline-none rounded-2xl bg-red-700 text-center text-white  px-0.5 shrink-0 px-4'>
                Generate Password
            </button>
          </div>
      </div>
    </> 
  )
}

export default App
