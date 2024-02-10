import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return (
    <div>
      <h1>Custom App</h1>
    </div>
  )
}

// const reactElement = {
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   children: 'Click me to visit google'
// }


const anotherElement = (
  <a href='https://google.com' target='_blank'>Visit Google</a>
)

const username = " shivam"
const reactElement = React.createElement(
    'a',                                              // at first always a tag is there 
    {href: 'https://google.com', target:'_blank'},    // at second always a object is there which contains all the properties or arguments of that element
    'Visit this Page',                                // at third always  the text is there
    username                                          // rest are variables that are evaluated expressions 
) 

ReactDOM.createRoot(document.getElementById('root')).render(
    
    // reactElement
    // anotherElement
    // <MyApp/>
    <App/>
)
