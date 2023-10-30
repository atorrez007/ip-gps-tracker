"use client";
import { useEffect } from "react";
import "../Styles/ContainerStyles.css";
import "../Styles/DashboardStyles.css";
import ImageComponent from "./ImageComponent";
import Map from "./Map";
import Input from "./Input";
import Dashboard from "./Dashboard";

const Container = () => {
  // useEffect(() => {
  //   const fetchIp = async () => {
  //     try {
  //       const res = await fetch(
  //         "https://geo.ipify.org/api/v2/country,city?apiKey="
  //       );
  //       const data = await res.json();

  //       console.log(
  //         `data returned from api route in input component is: ${data.ip} and coordinates are lat: ${data.location?.lat} and long: ${data.location?.lng} `
  //       );
  //       return data;
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   fetchIp();
  // }, []);
  return (
    <>
      <div className="container-styles">
        <ImageComponent />
        <Map />
      </div>
    </>
  );
};

export default Container;
