import React, { useEffect, useId, useRef, useState } from "react";
import { FaRegBell } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa6";
import { IoColorPaletteOutline } from "react-icons/io5";
import { IoImageOutline } from "react-icons/io5";
import { MdOutlineArchive } from "react-icons/md";
import { IoMdMore } from "react-icons/io";
import { MdUndo } from "react-icons/md";
import { IoMdRedo } from "react-icons/io";
import { TiPinOutline } from "react-icons/ti";
import { Form, useForm } from "react-hook-form";
import { useNote } from "../context/Context";

const Notes = () => {
  const titleRef = useRef();
  const textareaRef = useRef();

  const { setNotes, addNote, color, userLoggedIn } = useNote();
  const { email } = userLoggedIn[0];
  const handleSubmit = (e) => {
    e.preventDefault();
    const title = titleRef.current.value;
    const textarea = textareaRef.current.value;
    const id = new Date();
    addNote(title, textarea, id.toLocaleTimeString(), color, email);
    titleRef.current.value = "";
    textareaRef.current.value = "";
  };

  const handleTextareaResize = (event) => {
    event.target.style.height = "auto";
    event.target.style.height = event.target.scrollHeight + "px";
  };

  return (
    <form onSubmit={handleSubmit} className="">
      <div className="w-[500px]  border border-gray-400 px-4 py-3 flex flex-col rounded-lg gap-2">
        <input
          type="text"
          className="w-full text-sm pb-2 outline-none bg-transparent "
          placeholder="title"
          ref={titleRef}
        />
        <textarea
          onInput={handleTextareaResize}
          className="w-full resize-none text-sm  outline-none bg-transparent"
          placeholder="take a note ..."
          ref={textareaRef}
        ></textarea>

        <div className="flex items-center justify-between">
          <div className="flex items-center justify-between gap-4 text-sm">
            <div className="hover:bg-gray-300 rounded-full p-1 cursor-pointer">
              <FaRegBell />
            </div>
            <div className="hover:bg-gray-300 rounded-full p-1 cursor-pointer">
              <FaUserPlus />
            </div>
            <div className="hover:bg-gray-300 rounded-full p-1 cursor-pointer">
              <IoColorPaletteOutline />
            </div>
            <div className="hover:bg-gray-300 rounded-full p-1 cursor-pointer">
              <IoImageOutline />
            </div>
            <div className="hover:bg-gray-300 rounded-full p-1 cursor-pointer">
              <MdOutlineArchive />
            </div>
            <div className="hover:bg-gray-300 rounded-full p-1 cursor-pointer">
              <IoMdMore />
            </div>
            <div className="hover:bg-gray-300 rounded-full p-1 cursor-pointer">
              <MdUndo />
            </div>
            <div className="hover:bg-gray-300 rounded-full p-1 cursor-pointer">
              <IoMdRedo />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="bg-blue-800 hover:bg-blue-600 text-[10px] text-white py-1 px-2 rounded-md cursor-pointer"
            >
              Add Note
            </button>
          </div>
          {/* <TiPinOutline /> */}
        </div>
      </div>
    </form>
  );
};

export default Notes;
