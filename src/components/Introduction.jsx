import React from "react";
import { useTranslation } from "react-i18next";

const Introduction = () => {
  const { t } = useTranslation();
  return (
    // <section className="text-rise mb-4 text-4xl tracking-tight font-extrabold text-white">
    <section className="text-rise gap-8 items-center pt-8 pb-12 px-8 mx-auto max-w-screen-xl xl:gap-16 lg:grid lg:grid-cols-2 sm:py-16">
      <h2 className="font-bold text-brandLightPurple">Introduction</h2>
      <p className="mb-8 font-light md:text-lg text-gray-400">
        {t("Introduction")}
      </p>
      <img src="/images/intro.png" alt="Intro" />
    </section>
  );
};

export default Introduction;
