"use client";
import { useEffect } from "react";
import "../Styles/ContainerStyles.css";
import ImageComponent from "./ImageComponent";
import Map from "./Map";
import Input from "./Input";

const Container = () => {
  useEffect(() => {
    const fetchIp = async () => {
      try {
        const res = await fetch("https://api.ipify.org?format=json");
        const data = await res.json();
        console.log(
          `data returned from api route in input component is: ${data.ip}`
        );
        return data;
      } catch (err) {
        console.log(err);
      }
    };
    fetchIp();
  }, []);
  return (
    <div className="container-styles">
      <ImageComponent />
      <section className="map-container">
        <Map />
      </section>
    </div>
  );
};

export default Container;
