import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import {
  Introduction,
  Overview,
  Simulation,
  Segmentation,
  CustomSementicSegmentation,
  VisualSLAM,
  Conclusion,
  TitleSection,
} from "./CommonSection";
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
    setTimeout(handleScroll, 50); // 50ms 지연

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
    <main className="text-white">
      <Helmet>
        <title>Frozen City</title>
      </Helmet>
      <TitleSection />
      <Introduction />
      <Overview />
      <Simulation />
      <Segmentation />
      <CustomSementicSegmentation />
      <VisualSLAM />
      <Conclusion />
    </main>
  );
};

export default MainContent;
