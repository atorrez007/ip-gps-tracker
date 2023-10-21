"use client";
import { useEffect, useState } from "react";
import "../Styles/DashboardStyles.css";
const Dashboard = () => {
  const [isMobile, setIsMobile] = useState<boolean>(null);
  const updateHR = () => {
    const width = window.innerWidth;
    width <= 959 ? setIsMobile(true) : setIsMobile(false);
  };

  useEffect(() => {
    window.addEventListener("resize", updateHR);
  }, []);
  return (
    <div className="dashboard-container">
      <div className="dashboard-item">
        <span>IP ADDRESS</span>
        <h2>191.212.174.101</h2>
      </div>
      {!isMobile ? <span className="horizontal"></span> : ""}
      <div className="dashboard-item">
        <span>LOCATION</span>
        <h2>Brooklyn, NY 10001</h2>
      </div>
      {!isMobile ? <span className="horizontal"></span> : ""}
      <div className="dashboard-item">
        <span>TIMEZONE</span>
        <h2>UTC -05:00</h2>
      </div>
      {!isMobile ? <span className="horizontal"></span> : ""}
      <div className="dashboard-item">
        <span>ISP</span>
        <h2>SpaceX Starlink</h2>
      </div>
    </div>
  );
};

export default Dashboard;
