"use client";
import React, { useEffect, useState } from "react";

import MobileImage from "../assets/images/pattern-bg-mobile.png";
import DesktopImage from "../assets/images/pattern-bg-desktop.png";
import Image from "next/image";

const ImageComponent = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [ipAddress] = useState("206.190.175.42");
  const updateImg = () => {
    const width = window.innerWidth;
    width <= 501 ? setIsMobile(true) : setIsMobile(false);
  };

  useEffect(() => {
    window.addEventListener("resize", updateImg);
  }, []);
  return (
    <div className="image-container">
      <Image
        priority
        className="image-styling"
        src={isMobile ? MobileImage : DesktopImage}
        alt={isMobile ? "mobile-background" : "desktop-background"}
      />
    </div>
  );
};

export default ImageComponent;
