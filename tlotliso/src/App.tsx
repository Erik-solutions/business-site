import { useState,useEffect } from 'react'
import './index.css'; // Assuming your CSS is here

import './App.css'

function App() {
   const [darkMode, setDarkMode] = useState(false);

      useEffect(() => {
    // Toggle the class on the document's root element
        document.documentElement.classList.toggle('dark', darkMode);
  },  [darkMode]);

  return (
     <div className="app">
    <h1>This is Where it start!!!</h1>
    <button>Tlotliso </button>
    <a>link</a>
    <h1>H1</h1>
    <h2>H2</h2>
    <h3>H3</h3>
    <p>P</p>

    <button onClick={() => setDarkMode(prev => !prev)}>
        Toggle {darkMode ? 'Light' : 'Dark'} Mode
      </button>
    </div>
    
  )
}

export default App
