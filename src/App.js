import React from "react";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";

import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

import "./App.scss";
const App = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <div className="grad-black-purple">
        <Navbar />
        <MainContent />
      </div>
    </I18nextProvider>
  );
};

export default App;
