import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

  const PersonCard = (props) => {
    return (
      <div>
        <h1>{props.firstName} {props.lastName}</h1>
        <p>Age: {props.age}</p>
        <p>Hair Color: {props.hairColor}</p>
      </div>
    );
  }
  
  function App() {
    return (
      <div className="App">
        <PersonCard firstName="Jane" lastName="Doe" age="45" hairColor="Black" />
        <PersonCard firstName="John" lastName="Smith" age="88" hairColor="Brown" />
        <PersonCard firstName="Millard" lastName="Fillmore" age="50" hairColor="Brown" />
        <PersonCard firstName="Maria" lastName="Smith" age="62" hairColor="Brown" />
      </div>
    );
}


  


export default App
