import React from "react";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import i18n from "./resources/i18nSrc";
import "./App.css";
const App = () => {
  return (
    <div className="grad-black-purple">
      <button onClick={() => i18n.changeLanguage("en")}>English</button>
      <button onClick={() => i18n.changeLanguage("ko")}>한국어</button>

      <Navbar />
      <MainContent />
    </div>
  );
};

export default App;
