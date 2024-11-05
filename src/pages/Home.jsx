import React, { useState } from "react";
import Notes from "../components/Notes";
import Cards from "../components/Cards";
import { useNote } from "../context/Context";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Reminder from "./Reminder";
import Edit from "./Edit";
import Archive from "./Archive";
import Trash from "./Trash";

const Home = () => {
  const { notes, userSession, userLoggedIn, listView } = useNote();
  const [selectTab, setSelectTab] = useState("Home");
  const userdata = notes.filter((card) => card.email === userSession)
  const homeData = userdata.filter((card) => card.type === 'home')
  console.log(homeData)
  
  // const [inputValue, setInputValue] = useState('there are ');

  // const handleChange = (e) => {
  //   setInputValue(e.target.value);
  // };


  return (
    <>
      {userSession &&
        <div className="dark:bg-[#202124] dark:text-white h-screen">
          <Navbar />

          <div className="relative flex">

            <Sidebar setSelectTab={setSelectTab} selectTab={selectTab} />
            {selectTab === "Home" && (
              <div className="w-full p-[50px] flex flex-col items-center gap-11  scroll-smooth overflow-scroll h-screen">
                <Notes />
                <div className={`w-full flex  ${listView === true ? "justify-start items-center flex-col" : "flex-wrap items-start"} gap-3 pb-20 `}>
                  {homeData.map((card) => (
                    <Cards card={card} />
                  ))}
                </div>
              </div> 
            )}
            {selectTab === "Reminder" && <Reminder />}
            {selectTab === "Edit" && <Edit />}
            {selectTab === "Archive" && <Archive />}
            {selectTab === "Trash" && <Trash />}
          </div>
        </div>
      };
    </>
  );
};

export default Home;
