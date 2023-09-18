import React, { useEffect, useState } from "react";
import {
  Introduction,
  Overview,
  Simulation,
  Segmentation,
  VisualSLAM,
  Conclusion,
} from "./CommonSection";
import LanguageSelector from "./LanguageSelector";
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

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const images = document.querySelectorAll(".team-profile");
      images.forEach((image) => {
        console.log();
        const rect = image.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          setIsVisible(true);
          image.classList.add("visible");
        } else {
          setIsVisible(false);
          image.classList.remove("visible");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isVisible]);

  return (
    <main className="text-rise text-white">
      <section className="text-rise gap-8 items-center pt-8 pb-12 px-8 mx-auto max-w-screen-xl xl:gap-16 lg:grid lg:grid-cols-2 sm:py-16">
        <h1 style={{ display: "inline-block", width: "100%" }}>
          <LanguageSelector />
          Frozen City
          <div style={{ display: "inline-block" }}>
            <img
              src="../images/teams_001.png"
              alt="slkumquat@gmail.com"
              format="webp"
              delay="300"
              style={{
                opacity: 1,
                transform: "translate3d(20px, 0px, 1px) scale(0.8) ",
              }}
              className="roll-in-left team-profile w-24 h-24 border-brandLightPurple border-4 rounded-full bottom-48 -right-14 box-content v-lazy-image v-lazy-image-loaded"
            />
            <img
              src="../images/teams_002.png"
              alt="pcar530@gmail.com"
              format="webp"
              delay="300"
              style={{
                opacity: 1,
                transform: "translate3d(-15px, 0px, 2px) scale(0.8)",
              }}
              className="roll-in-left team-profile w-24 h-24 border-brandLightPurple border-4 rounded-full bottom-48 -right-14 box-content v-lazy-image v-lazy-image-loaded "
            />
            <img
              src="../images/teams_003.png"
              width="96"
              height="96"
              alt="etrongt@kakao.com"
              format="webp"
              delay="300"
              style={{
                opacity: 1,
                transform: "translate3d(-50px, 0px, 3px) scale(0.8)",
              }}
              className="roll-in-left team-profile w-24 h-24 border-brandLightPurple border-4 rounded-full bottom-48 -right-14 box-content v-lazy-image v-lazy-image-loaded"
            />
            <img
              src="../images/teams_004.png"
              width="96"
              height="96"
              alt="ssellu.lee@gmail.com"
              format="webp"
              delay="300"
              style={{
                opacity: 1,
                transform: "translate3d(-85px, 0px, 4px) scale(0.8)",
              }}
              className="roll-in-left team-profile w-24 h-24 border-brandLightPurple border-4 rounded-full bottom-48 -right-14 box-content v-lazy-image v-lazy-image-loaded"
            />
          </div>
        </h1>
      </section>
      <Introduction />
      <Overview />
      <Simulation />
      <Segmentation />
      <VisualSLAM />
      <Conclusion />
    </main>
  );
};

export default MainContent;
