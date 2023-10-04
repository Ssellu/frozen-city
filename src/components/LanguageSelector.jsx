import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import { useTranslation } from "react-i18next";

function LanguageSelector() {
  const { t, i18n } = useTranslation();
  const [selectedLang, setSelectedLang] = useState("en");
  const flagMap = {
    en: "images/locale-usa-32.png",
    ko: "images/locale-south-korea-32.png",
  };

  const handleChangeLanguage = (lang) => {
    setSelectedLang(lang);
    i18n.changeLanguage(lang);
  };

  return (
    <Dropdown style={{ display: "inline-block", margin: "8px" }}>
      <Dropdown.Toggle
        variant="secondary"
        style={{ padding: "4px 16px 8px 16px" }}
      >
        <img
          src={flagMap[selectedLang]}
          alt={selectedLang === "en" ? "English" : "한국어"}
          style={{ width: "24px", height: "24px" }}
        />
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={() => handleChangeLanguage("en")}>
          <img
            src="images/locale-usa-32.png"
            alt="English"
            style={{ width: "24px", height: "24px" }}
          />
          English
        </Dropdown.Item>
        <Dropdown.Item onClick={() => handleChangeLanguage("ko")}>
          <img
            src="images/locale-south-korea-32.png"
            alt="한국어"
            style={{ width: "24px", height: "24px" }}
          />
          한국어
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default LanguageSelector;
