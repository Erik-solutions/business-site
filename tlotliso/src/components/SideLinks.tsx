import type { ReactNode } from "react";

export type Links = {
  name: string;
  link: string;
  icon: ReactNode; // or React.ElementType if you're using components
};

interface SideLinksProps{
    icons:Links[];
}


export const SideLinks: React.FC<SideLinksProps> = ({ icons }) => (
 
  <div className="flex flex-col sideLinks__container
   w-[4rem] rounded-lg px-2">
    {icons.map((item, index) => (
      <span key={index} className="group relative flex items-center
        my-1 py-2 px-2 rounded-lg w-fit ">
        <a className=" icons__container" href={item.link}>{item.icon}</a>
          
       
        <span className="absolute right-10 opacity-0 
        group-hover:opacity-100 transition-opacity duration-200 
        bg-gray-900 text-white text-sm px-2 py-1 rounded">
          {item.name}
        </span>
      </span>
    ))}
  </div>
  
 
);

  