import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
                'https://ltxefuhyxlyhezlvdned.supabase.co', 
                'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx0eGVmdWh5eGx5aGV6bHZkbmVkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI4ODI0NTYsImV4cCI6MjA1ODQ1ODQ1Nn0.WfTV2um_rlk_ZWS1hBo1T8h0Za0DXgino3CgAUXOEcw');

  import React from 'react';

  interface FormProps {
    isActive: boolean;
    closeForm:()=>void;
  }
  
  export const Form: React.FC<FormProps> = ({ isActive,closeForm }) => {
    
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [subject, setSubject] = useState('');
    const [textMessage, setTextMessage] = useState('');

   /* const personDetails={
      email:email,
      name:name,
      surname:surname,
      textMessage:textMessage,
    }*/


    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
    
      const { data, error } = await supabase.from('contact_submissions').insert([
        {
          name,
          surname,
          email,
          subject,
          message: textMessage,
        },
      ])
      .select('*'); // Optional but helpful for debugging;
    
      if (error) {
        alert('Failed to send. Try again.');
        console.log(error)
        return;
      }
      console.log('Inserted row:', data); // ✅ Use the value
      alert('Message submitted successfully!');
      closeForm();
    };







    if (!isActive) return null;
  
    return (
      <div className="form__container fixed inset-0 z-50 flex items-center
       justify-center  bg-opacity-50 
       transition-opacity duration-300">
        <div className=" p-8 rounded-lg 
        shadow-lg w-full max-w-md relative">
         
          <form className="contact__form pt-2 border border-gray-200 pb-2 rounded-lg" onSubmit={handleSubmit}>
            <label className="flex flex-col gap-2 mb-4">
              <span className="text-sm text-left self-center w-[60%]">Enter Your Name</span>
              <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              required className="border border-gray-300 p-2 rounded" placeholder="Joshoua" />
            </label>
  
            <label className="flex flex-col gap-2 mb-4">
              <span className="text-sm text-left self-center w-[60%]">Enter your Surname</span>
              <input 
              
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              required className="border border-gray-300 p-2 rounded" placeholder="Josh" />
            </label>
  
            <label className="flex flex-col gap-2 mb-4">
              <span className="text-sm text-left self-center w-[60%]">Enter your email address</span>
              <input 
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required className="border border-gray-300 p-2 rounded" placeholder="joshoua@josh.com" />
            </label>
  
            <label className="flex flex-col gap-2 mb-4">
              <span className="text-sm text-left self-center w-[60%]">Enter subject</span>
              <input

            value={subject}
              onChange={(e) => setSubject(e.target.value)}
               required className="border border-gray-300 p-2 rounded" placeholder="Service Ordering" />
            </label>
  
            <label className="flex flex-col gap-2 mb-4">
              <span className="text-sm text-left self-center" 
              >Message</span>
              <textarea 
              value={textMessage}
              onChange={(e) => setTextMessage(e.target.value)}
              required className="border border-gray-300 p-2 rounded" placeholder="message" />
            </label>
  
          
            <input
            
              className="submit__btn bg-blue-500  px-4 py-2 rounded cursor-pointer"
              type="submit"
              value="Send"
            />


  

          </form>
        </div>
      </div>
    );
  };
  