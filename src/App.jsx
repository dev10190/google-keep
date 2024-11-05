import React from "react";
import Container from "./components/Container";
import { Outlet } from "react-router-dom";
import NotesProvider, { useNote } from "./context/Context";

const App = () => {
  return (
    <NotesProvider>
      <Container>
        {/* <Navbar /> */}
        {/* <div className="flex "> */}
        {/* <Sidebar /> */}
        <Outlet />
        {/* </div> */}
      </Container>
    </NotesProvider>
  );
};

export default App;
