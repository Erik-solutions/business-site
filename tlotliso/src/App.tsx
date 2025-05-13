import { useState,useEffect } from 'react'
import './App.css'; // Assuming your CSS is here
import { TechnologyStack } from './components/ TechnologyStack';
import { ReviewsRender } from './components/ReviewsRener';

import 'swiper/css';
import 'swiper/css/pagination';




function App() {
   const [darkMode, setDarkMode] = useState(false);

      useEffect(() => {
    // Toggle the class on the document's root element
        document.documentElement.classList.toggle('dark', darkMode);
  },  [darkMode]);

  return (
  <div className="app"> <div className='my-[4rem]'>
   <span className='flex justify-between items-center '> 
    <h1 className=' text-left w-[80%] '> Software  Engineering with</h1> 
    <input
  type="checkbox" onClick={() => setDarkMode(prev => !prev)}
  
  className="toggle toggle-md bg-white border border-[##007bff]  text-black
             checked:border-[#ffffff] checked:bg-black checked:text-white"
/>
     </span>
      
    <h1 className='text-right'>Tlotliso Makoboshane</h1>
      </div>

      <h2 className="my-[4rem]">Dedication Builds Resilience</h2>
      <button className='btn__custom'>Book A Meeting </button>
      <a>Contact Us</a>
   
<TechnologyStack/>
<ReviewsRender/>
    
    </div>
    
  )
}

export default App
