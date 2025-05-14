import { useState } from 'react';

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

    const personDetails={
      email:email,
      name:name,
      surname:surname,
      textMessage:textMessage,
    }



  const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert('Email sent');
    closeForm();
    
    
    
    // Optionally, you can reset the form or handle other logic here
  };

    if (!isActive) return null;
  
    return (
      <div className="fixed inset-0 z-50 flex items-center
       justify-center bg-black bg-opacity-50 
       transition-opacity duration-300">
        <div className="bg-white p-8 rounded-lg 
        shadow-lg w-full max-w-md relative">
         
          <form className="" onSubmit={handleSubmit}>
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
            
              className="submit__btn bg-blue-500 text-white px-4 py-2 rounded cursor-pointer"
              type="submit"
              value="Send"
            />


  

          </form>
        </div>
      </div>
    );
  };
  