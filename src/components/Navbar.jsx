import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);

  let scrollTimer = null;

  const handleScroll = () => {
    console.log(hovering);
    clearTimeout(scrollTimer);

    setVisible(true);

    scrollTimer = setTimeout(() => {
      if (!hovering) {
        setVisible(false);
      }
    }, 1000);
  };

  useEffect(() => {
    console.log("useEffect");
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hovering]);

  return (
    <nav
      className={`Navbar ${visible ? "visible" : "hidden"} `}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <Link
        to="introduction"
        smooth={true}
        duration={500}
        className="font-bold text-brandLightPurple"
      >
        Introduction
      </Link>
      <Link
        to="overview"
        smooth={true}
        duration={500}
        className="font-bold text-brandLightPurple"
      >
        System Overview
      </Link>
      <Link
        to="simulation"
        smooth={true}
        duration={500}
        className="font-bold text-brandLightPurple"
      >
        Carla Simulation
      </Link>
      <Link
        to="semantic-segmentation"
        smooth={true}
        duration={500}
        className="font-bold text-brandLightPurple"
      >
        Semantic Segmentation
      </Link>
      <Link
        to="vslam"
        smooth={true}
        duration={500}
        className="font-bold text-brandLightPurple"
      >
        Visual SLAM
      </Link>
      <Link
        to="conclusion"
        smooth={true}
        duration={500}
        className="font-bold text-brandLightPurple"
      >
        Conclusion
      </Link>
      <Link
        to="team"
        smooth={true}
        duration={500}
        className="font-bold text-brandLightPurple"
      >
        The Team
      </Link>
    </nav>
  );
};

export default Navbar;
