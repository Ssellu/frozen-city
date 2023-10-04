import React, { Component } from "react";
import { useTranslation } from "react-i18next";
import "../App.scss";
const Callout = ({ title, content }) => {
  const { t } = useTranslation();
  return (
    <div className="mx-auto callout">
      <h3 className="h5" dangerouslySetInnerHTML={{ __html: title }}></h3>
      <div
        className="font-light md:text-lg text-body-secondary"
        dangerouslySetInnerHTML={{ __html: t(content) }}
      />
    </div>
  );
};

export default Callout;
