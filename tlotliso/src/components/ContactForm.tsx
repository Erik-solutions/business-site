interface FormProps {
    isActive: boolean;
    // other props...
  }

  import React from 'react';

  interface FormProps {
    isActive: boolean;
  }
  
  export const Form: React.FC<FormProps> = ({ isActive }) => {
    if (!isActive) return null;
  
    return (
      <div className="fixed inset-0 z-50 flex items-center
       justify-center bg-black bg-opacity-50 
       transition-opacity duration-300">
        <div className="bg-white p-8 rounded-lg 
        shadow-lg w-full max-w-md relative">
          <form className="">
            <label className="flex flex-col gap-2 mb-4">
              <span className="text-sm text-left self-center w-[60%]">Enter Your Name</span>
              <input className="border border-gray-300 p-2 rounded" placeholder="Joshoua" />
            </label>
  
            <label className="flex flex-col gap-2 mb-4">
              <span className="text-sm text-left self-center w-[60%]">Enter your Surname</span>
              <input className="border border-gray-300 p-2 rounded" placeholder="Josh" />
            </label>
  
            <label className="flex flex-col gap-2 mb-4">
              <span className="text-sm text-left self-center w-[60%]">Enter your email address</span>
              <input className="border border-gray-300 p-2 rounded" placeholder="joshoua@josh.com" />
            </label>
  
            <label className="flex flex-col gap-2 mb-4">
              <span className="text-sm text-left self-center w-[60%]">Enter subject</span>
              <input className="border border-gray-300 p-2 rounded" placeholder="Service Ordering" />
            </label>
  
            <label className="flex flex-col gap-2 mb-4">
              <span className="text-sm text-left self-center w-[60%]">Message</span>
              <textarea className="border border-gray-300 p-2 rounded" placeholder="message" />
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
  