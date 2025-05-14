import { useState,useEffect } from 'react'
import './App.css'; // Assuming your CSS is here
import { TechnologyStack } from './components/ TechnologyStack';
import { ReviewsRender } from './components/ReviewsRener';

import 'swiper/css';
import 'swiper/css/pagination';
import { Footer } from './components/Footer';
import { Form } from './components/ContactForm';
import BookingCalendar from './components/Bookings';




function App() {
   const [darkMode, setDarkMode] = useState(false);

   const [isFormActive,setForm] = useState(false);

   const [isCallenderOpen,setCallender] = useState(false);

   function toggleCallender(){
    setCallender((prev)=>!prev);
    console.log(isCallenderOpen)
   }

   function toggleForm(){
    setForm((prev)=>!prev)
   }

      useEffect(() => {
    // Toggle the class on the document's root element
        document.documentElement.classList.toggle('dark', darkMode);
  },  [darkMode]); 

  return (
    <>
  <div className={`app ${isFormActive? "": ""}`}> <div className='my-[4rem]'>
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

      <h2 className="my-[4rem] font-light text-6xl">Dedication Builds Resilience</h2>
      <button className='btn__custom action__btn  mr-8'
      onClick={toggleCallender}
      >Book A Meeting </button>
      <a onClick={toggleForm} className=' action__btn ml-8'>Contact Us</a>
      < Form isActive={isFormActive}
      closeForm={ toggleForm}/>    
<TechnologyStack/>
<ReviewsRender/>
<Footer/>
<BookingCalendar callendarOpen={isCallenderOpen}
closeCalendar={toggleCallender}/>
    
    </div>
   
    </>
  )
}

export default App
