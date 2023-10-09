import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";

import MainContent from "./components/MainContent";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

import "bootswatch/dist/quartz/bootstrap.min.css";
import "./App.scss";

const App = () => {
  // Intersection Observer API
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1, // 10% of the target is visible
  };
  const handleObserver = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Do something with the entry.target element (e.g. load content)
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible");
      }
    });
  };
  const observer = new IntersectionObserver(handleObserver, observerOptions);

  useEffect(() => {
    const sections = document.querySelectorAll(".text-rise");
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []); // End of Intersection Observer API
  return (
    <BrowserRouter basename={`${process.env.PUBLIC_URL}/frozen-city`}>
      <I18nextProvider i18n={i18n}>
        <MainContent />
      </I18nextProvider>
    </BrowserRouter>
  );
};

export default App;
