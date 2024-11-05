import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";
import logo from "../assets/logo.png";
import { IoMdRefresh } from "react-icons/io";
import { TfiViewListAlt } from "react-icons/tfi";
import { IoSettingsSharp } from "react-icons/io5";
import { IoAppsSharp } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { useNote } from "../context/Context";
import { FaUserTie } from "react-icons/fa";
import { LuLogOut } from "react-icons/lu";
import AccountDropdown from "./AccountDropdown";
import { MdDarkMode } from "react-icons/md";

const Navbar = ({ currUser }) => {
  const { setShowSidebar, showSidebar, setIsDarkMode, isDarkMode, listView, setListView } = useNote();
  const [menu, setMenu] = useState(false);

  const handleDropdown = (e) => {
    setMenu(!menu);
    e.stopPropagation();
  };
  return (
    <div className="w-full flex items-center justify-between py-2 px-5 border-b-2">
      <div className="flex items-center gap-2 w-[25%]">
        <div
          onClick={() => setShowSidebar((prev) => !showSidebar)}
          className="text-2xl font-semibold cursor-pointer"
        >
          <IoMdMenu />
        </div>
        <img className="w-10" src={logo} alt="" />
        <p className="font-semibold text-xl whitespace-nowrap">Google Keep</p>
      </div>
      <div className="hidden md:block w-full min-w-[300px] mx-20 hover:shadow-sm border border-gray-600 rounded-md hover:shadow-black">
        <div className="flex items-center  gap-2 bg-gray-200 dark:bg-transparent p-2 rounded-lg  ">
          <IoSearchSharp className="text-xl" />
          <input
            className="bg-transparent w-full p-1 outline-none px-2"
            type="text"
            placeholder="Search Here"
          />
        </div>
      </div>
      <div className="flex items-center justify-end gap-10 w-[25%]">
        <div className="flex items-center gap-4 text-xl">
          <MdDarkMode onClick={(prev) => setIsDarkMode(prev => !isDarkMode)} className='cursor-pointer' />
          <TfiViewListAlt onClick={(prev) => setListView(prev => !listView)} className="cursor-pointer" />
          <IoSettingsSharp />
        </div>
        <div className="flex items-center gap-4 text-xl">
          <IoAppsSharp />
          <div onClick={handleDropdown} className="relative cursor-pointer">
            <FaRegUserCircle />

            {menu === true && (
              <div
                className={`absolute top-10 right-0 bg-gray-300 p-10 rounded-2xl w-[400px] z-10 dark:bg-gray-800`}
              >
                <AccountDropdown />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
