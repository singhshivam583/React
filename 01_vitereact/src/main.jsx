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


// const anotherElement = (
//   <a href='https://google.com' target='_blank'>Visit Google</a>
// )

const username = " shivam"
const reactElement = React.createElement(
    'a',
    {href: 'https://google.com', target:'_blank'},
    'Visit this Page',
    username
) 

ReactDOM.createRoot(document.getElementById('root')).render(

    // reactElement
    // anotherElement
    <App/>
)
