import React, { Component } from "react";
import { useTranslation } from "react-i18next";
import "../App.scss";
const Callout = ({ title, content }) => {
  const { t } = useTranslation();
  return (
    <div className="callout">
      <h3
        className="font-bold text-brandLightPurple"
        dangerouslySetInnerHTML={{ __html: title }}
      ></h3>
      <div
        className="mb-4 font-light md:text-lg text-gray-400"
        dangerouslySetInnerHTML={{ __html: t(content) }}
      />
    </div>
  );
};

export default Callout;
