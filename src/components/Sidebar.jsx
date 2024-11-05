import React from "react";
import { NavLink } from "react-router-dom";
import { FaRegLightbulb } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { IoArchiveOutline } from "react-icons/io5";
import { FaRegTrashAlt } from "react-icons/fa";
import { useNote } from "../context/Context";

const Sidebar = ({ setSelectTab, selectTab }) => {
  const { showSidebar } = useNote();
  return (
    <div className=" py-2 flex flex-col gap-2 max-w-[260px]">
     
      <div
        onClick={() => setSelectTab("Home")}
        className={` p-2 text-[18px] flex items-center gap-5 pl-4 py-3  rounded-tr-full rounded-br-full cursor-pointer ${selectTab === "Home" && 'bg-gray-300'}`}
      >
        <div className="px-2">
          <FaRegLightbulb />
        </div>
        <div className="md:block hidden">
          <p
            className={`w-[200px] ${showSidebar === true ? "hidden" : "block"} text-[16px]`}
          >
            Home
          </p>
        </div>
      </div>
      <div
        onClick={() => setSelectTab("Reminder")}
        className={` p-2 text-[18px] flex items-center gap-5 pl-4 py-3 rounded-tr-full rounded-br-full cursor-pointer ${selectTab === "Reminder" && 'bg-gray-300'}`}
      >
        <div className="px-2">
          <FaRegBell />
        </div>
        <div className="md:block hidden">
          <p
            className={`w-[200px] ${showSidebar === true ? "hidden" : "block"} text-[16px]`}
          >
            Reminders
          </p>
        </div>
      </div>
      <div
        onClick={() => setSelectTab("Edit")}
        className={` p-2 text-[18px] flex items-center gap-5 pl-4 py-3 f rounded-tr-full rounded-br-full cursor-pointer ${selectTab === "Edit" && 'bg-gray-300'}`}
      >
        <div className="px-2">
          <CiEdit />
        </div>
        <div className="md:block hidden">
          <p
            className={`w-[200px] ${showSidebar === true ? "hidden" : "block"} text-[16px]`}
          >
            Edit labels
          </p>
        </div>
      </div>
      <div
        onClick={() => setSelectTab("Archive")}
        className={` p-2 text-[18px] flex items-center gap-5 pl-4 py-3  rounded-tr-full rounded-br-full cursor-pointer ${selectTab === "Archive" && 'bg-gray-300'}`}
      >
        <div className="px-2">
          <IoArchiveOutline />
        </div>
        <div className="md:block hidden">
          <p
            className={`w-[200px] ${showSidebar === true ? "hidden" : "block"} text-[16px]`}
          >
            Archive
          </p>
        </div>
      </div>
      <div
        onClick={() => setSelectTab("Trash")}
        className={` p-2 text-[18px] flex items-center gap-5 pl-4 py-3  rounded-tr-full rounded-br-full cursor-pointer ${selectTab === "Trash" && 'bg-gray-300'}`}
      >
        <div className="px-2">
          <FaRegTrashAlt />
        </div>
        <div className="md:block hidden">
          <p
            className={`w-[200px] ${showSidebar === true ? "hidden" : "block"} text-[16px]`}
          >
            Trash
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
