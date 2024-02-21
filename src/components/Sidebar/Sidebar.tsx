'use client'
import { useState } from "react";
import { FaCircleArrowLeft } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { RiPieChart2Fill } from "react-icons/ri";
import { MdLibraryBooks, MdNavigateNext } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import Image from "next/image";
import { BsFire } from "react-icons/bs";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import Dashboard from "../dashboard/Dashboard";


const Sidebar = () => {
  const [open, setOpen] = useState(true);

  const Menus = [
    { title: "Home", icon: <FaHome /> },
    { title: "Notes", icon: <MdLibraryBooks /> },
    { title: "Statistics", icon: <RiPieChart2Fill/>},
    { title: "Chat", icon:<IoChatboxEllipsesOutline />},
    { title: "Settings",icon:<IoSettingsOutline/>}
  ];

const toggleSideBar=()=>{
  setOpen(!open);
}

  return (
      <div
        className={` ${
          open ? "w-60" : "w-18"
        } bg-[#111729] h-full relative duration-300`}
      >
        <FaCircleArrowLeft
              className={`absolute cursor-pointer -right-2 border border-black top-28 rounded-full text-3xl ${!open && "rotate-180"} text-white`}
              onClick={toggleSideBar}
            />
        <div className="flex h-screen items-center flex-col justify-around">
            <div className="flex items-center justify-around w-full">
            <BsFire className="text-[#409BEE]" size={30}/>
            <span className={`${!open && "hidden"} origin-left duration-200 text-white`}>
              Dashboard
          </span>
          </div>
       
          <ul className="flex flex-col items-start gap-5 w-full justify-center px-3">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex rounded-md px-3 py-3 cursor-pointer hover:bg-[#2C3A58]  text-[#CCCCCC] items-center justify-center gap-10 
                ${index === 0 && "bg-[#2C3A58] "} ${open && "w-full"} `}
            >
              <span className="text-xl">{Menu.icon}</span>
              <span className={`${!open && "hidden"} origin-left duration-200 flex items-center justify-between w-full`}>
                {Menu.title}
                <MdNavigateNext/>
              </span>
            </li>
          ))}
          </ul>
          <div className="flex-col flex items-center justify-center gap-10 w-full">
          <div className="flex items-center justify-center gap-5">
          <Image
            src="/user.png"
            width={45}
            height={45}
            alt="Picture of the author"
            className="bg-white rounded-full"
          /> <span className={`${!open && "hidden"} origin-left duration-200 text-white`}>
          Aliam Colter
          </span>
          </div>
        
            <div className="flex items-center justify-around w-full gap-5">
            <FaArrowRightFromBracket size={20} className="text-[#CCCCCC]"/>
            <span className={`${!open && "hidden"} origin-left duration-200 text-white`}>
          Logout
          </span>
            </div>
        
          </div>
        </div>
      </div>
  );
};

export default Sidebar;
