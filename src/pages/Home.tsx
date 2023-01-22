import React from "react";
import Chat from "../components/Chat";
import Sidebar from "../components/Sidebar";
import "../styles/Home.scss"
const Home = () => {
  return (
    <div className="Home">
      <Sidebar />
      <Chat />
    </div>
  );
};

export default Home;
