import React, { useState } from "react";
import { FaRegBell } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa6";
import { IoColorPaletteOutline } from "react-icons/io5";
import { IoImageOutline } from "react-icons/io5";
import { MdOutlineArchive } from "react-icons/md";
import { IoMdMore } from "react-icons/io";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useNote } from "../context/Context";
import { MdDelete } from "react-icons/md";
import { VscPinned } from "react-icons/vsc";

const Cards = ({ card }) => {
  const { deleteNote, changeColor, userLoggedIn, premanentDelete, listView, setListView, archiveNote } = useNote();

  const [colors, setColors] = useState("#f39f76");
  const [showColors, setShowColors] = useState(false);

  const handleTrash = (id, email, type) => {
    deleteNote(id, email, type);
  };

  const handleDelete = (id) => {
    premanentDelete(id);
  };

  const handleColor = (color) => {
    changeColor(card.id, { ...card, colorCard: color });
  };

  const handleArchived = (id, email, type) => {
    archiveNote(id, email, type)
  }

  return (
    <>
      <div
        className={` relative w-[270px] ${listView === true ? 'w-[500px]' :'w-[270px]'} group rounded-lg  p-5  cursor-pointer `}
        style={{ background: `${card.colorCard}` }}
      >
        <p className="text-xl text-gray-900 font-semibold pb-2">{card.title}</p>
        <p className="text-base text-gray-800 ">{card.textarea}</p>

        <div  className="absolute rounded-full border-black hidden group-hover:block top-[-10px] right-[-10px] p-1 cursor-pointer text-lg dark:bg-black font-bold bg-white">
          {card.type === "delete" ? "" : <VscPinned />}
        </div>
        <div
          onClick={() => handleDelete(card.id)}
          className="absolute rounded-full border-black  bottom-[10px] right-[10px]  cursor-pointer text-lg  font-bold "
        >
          {card.type === "delete" && <MdDelete />}
        </div>

        <div
          className={` pt-6 ${
            showColors === true ? "opacity-100" : ""
          }  opacity-0 group-hover:opacity-100`}
        >
          <div className={`flex ${listView === true ? "justify-start" : "items-center justify-between"}  gap-4 text-base text-black `}>
            <div
              onClick={() => handleTrash(card.id, card.email, card.type)}
              className="hover:bg-gray-300 rounded-full p-1 cursor-pointer"
            >
              {card.type === "delete" ? "" : <MdDelete />}
            </div>

            <div className="hover:bg-gray-300 rounded-full p-1 cursor-pointer">
              {card.type === "delete" ? "" : <FaUserPlus />}
            </div>
            <div
              onClick={() => setShowColors((prev) => !prev)}
              className="hover:bg-gray-300 rounded-full p-1 cursor-pointer relative"
            >
              {card.type === "delete" ? "" : <IoColorPaletteOutline />}

              {showColors === true && (
                <div className="absolute z-10 bottom-[-70px] left-[-100px] flex gap-2 p-2 bg-slate-500 rounded-2xl">
                  <div
                    onClick={() => handleColor("#f39f76")}
                    className="w-8 h-8 rounded-full bg-[#f39f76]  p-1 border-2 border-white"
                  ></div>
                  <div
                    onClick={() => handleColor("#faafa8")}
                    className="w-8 h-8 rounded-full bg-[#faafa8]  p-1 border-2 border-white"
                  ></div>
                  <div
                    onClick={() => handleColor("#fff8b8")}
                    className="w-8 h-8 rounded-full bg-[#fff8b8]  p-1 border-2 border-white"
                  ></div>
                  <div
                    onClick={() => handleColor("#b4ddd3")}
                    className="w-8 h-8 rounded-full bg-[#b4ddd3]  p-1 border-2 border-white"
                  ></div>
                  <div
                    onClick={() => handleColor("#d4e4ed")}
                    className="w-8 h-8 rounded-full bg-[#d4e4ed]  p-1 border-2 border-white"
                  ></div>
                  <div
                    onClick={() => handleColor("#aeccdc")}
                    className="w-8 h-8 rounded-full bg-[#aeccdc]  p-1 border-2 border-white"
                  ></div>
                  <div
                    onClick={() => handleColor("#d3bfdb")}
                    className="w-8 h-8 rounded-full bg-[#d3bfdb]  p-1 border-2 border-white"
                  ></div>
                  <div
                    onClick={() => handleColor("#e9e3d4")}
                    className="w-8 h-8 rounded-full bg-[#e9e3d4]  p-1 border-2 border-white"
                  ></div>
                </div>
              )}
            </div>
            <div className="hover:bg-gray-300 rounded-full p-1 cursor-pointer">
              {card.type === "delete" ? "" : <IoImageOutline />}
            </div>
            <div onClick={() => handleArchived(card.id, card.email, card.type)} className="hover:bg-gray-300 rounded-full p-1 cursor-pointer">
              {card.type === "delete" ? "" : <MdOutlineArchive />}
            </div>
            <div className="hover:bg-gray-300 rounded-full p-1 cursor-pointer">
              {card.type === "delete" ? "" : <IoMdMore />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
