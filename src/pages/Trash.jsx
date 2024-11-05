import React from "react";
import { useNote } from "../context/Context";
import Cards from "../components/Cards";
import { FaTrash } from "react-icons/fa";

const Trash = () => {
  const { notes, userSession } = useNote();
  const note = notes.filter((card) => card.email === userSession);
  const deleteNote = note.filter((card) => card.type === "delete");

  return (
    <>
      {deleteNote.length === 0 ? (

        <div className="flex items-center justify-center w-full h-[80vh] ">
        <div className=" flex flex-col gap-10 items-center">
         
          <div className="text-[120px] text-gray-500 ">
            <FaTrash />
          </div>
          <p className="text-[30px] text-gray-500"> No notes in  Trash</p>{" "}
        </div>
        </div>
      ) : (
        <div className="w-full flex flex-wrap gap-3 items-start p-10">
          {deleteNote.map((trash) => (
            <Cards card={trash} />
          ))}
        </div>
      )}
    </>
  );
};

export default Trash;
