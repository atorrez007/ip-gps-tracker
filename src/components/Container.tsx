"use client";
import React, { useEffect, useState } from "react";
import "../Styles/ContainerStyles.css";
import MobileImage from "../assets/images/pattern-bg-mobile.png";
import DesktopImage from "../assets/images/pattern-bg-desktop.png";
import Image from "next/image";

const Container = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const updateImg = () => {
    const width = window.innerWidth;
    width <= 501 ? setIsMobile(true) : setIsMobile(false);
  };

  useEffect(() => {
    window.addEventListener("resize", updateImg);
  }, []);

  return (
    <div className="container-styles">
      <div className="image-container">
        <Image
          priority
          className="image-styling"
          src={isMobile ? MobileImage : DesktopImage}
          alt={isMobile ? "mobile-background" : "desktop-background"}
        />
      </div>
      <div className="map-container">Map</div>
    </div>
  );
};

export default Container;
