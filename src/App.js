import React from "react";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";

import "./App.scss";
const App = () => {
  return (
    <div className="grad-black-purple">
      <Navbar />
      <MainContent />
    </div>
  );
};

export default App;
