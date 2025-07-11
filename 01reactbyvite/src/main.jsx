import React from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.jsx'


// function Myapp(){
//   return(
//     <h1>Hey This is myapp Tage !</h1>
//   )
// }

// const Reactelements = {
//     type:'a',
//     props: {
//         href: "htpps://google.com",
//         target: '_balck'
//     },
//     Children : "Click Me To Visit Google "
// }
const reactele = React.createElement(
    'a',
    {href:"htpps://google.com",target: "_black"},
    "Click Me To Visit Google d"
)
// const anotherele = (
//   <a href="htpps://google.com" target= '_blank'>Visit google </a>
// )
createRoot(document.getElementById('root')).render(
  <App/>
)
