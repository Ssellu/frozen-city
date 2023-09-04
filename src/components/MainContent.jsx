import React, { useEffect } from "react";
import Introduction from "./Introduction";
import Overview from "./Overview";
import Simulation from "./Simulation";

const MainContent = () => {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".text-rise");
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          section.classList.add("visible");
        } else {
          section.classList.remove("visible");
        }
      });
    };

    // 첫 로딩 때 한 번 실행
    handleScroll();

    // 스크롤 이벤트에 연결
    window.addEventListener("scroll", handleScroll);

    return () => {
      // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main>
      <h1 className="text-rise mb-4 text-4xl tracking-tight font-extrabold text-white gap-8 items-center pt-8 pb-12 px-8 mx-auto max-w-screen-xl xl:gap-16 lg:grid lg:grid-cols-2 sm:py-16">
        Frozen City
      </h1>
      <Introduction id="introduction" />
      <Overview id="overview" />
      <Simulation id="simulation" />
      <section id="semantic-segmentation">{}</section>
      <section id="vslam">{}</section>
      <section id="conclusion">{}</section>
      <section id="team">{}</section>
    </main>
  );
};

export default MainContent;
