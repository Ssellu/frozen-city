import React from "react";
import { useTranslation } from "react-i18next";

const Simulation = () => {
  const { t } = useTranslation();
  return (
    <section className="text-rise gap-8 items-center pt-8 pb-12 px-8 mx-auto max-w-screen-xl xl:gap-16 lg:grid lg:grid-cols-2 sm:py-16">
      <h2 className="font-bold text-brandLightPurple">Carla Simulation</h2>
      <div
        className="mb-8 font-light md:text-lg text-gray-400"
        dangerouslySetInnerHTML={{ __html: t("Simulation") }}
      />
    </section>
  );
};

export default Simulation;
