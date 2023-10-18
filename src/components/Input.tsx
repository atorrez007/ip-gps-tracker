"use client";
import Image from "next/image";
import "../Styles/InputStyles.css";
import iconArrow from "../assets/images/icon-arrow.svg";
import { FormEvent, useEffect, useState } from "react";
import { GeolocationResponse } from "@/Types/types";
import Dashboard from "./Dashboard";

const Input = () => {
  const [ipAddress, setIpAddress] = useState<string>();
  const [geoLocation, setGeolocation] = useState<GeolocationResponse | null>(
    null
  );
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIpAddress(e.target.value);
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIpAddress(ipAddress);
    !ipAddress ? alert("please enter an IP Address") : queryAddress(ipAddress);
  };

  const queryAddress = async (ipAddress: string | null) => {
    try {
      const res = await fetch(
        `/api/geolocation?ipAddress=${ipAddress ? ipAddress : ""}`
      );
      const data = await res.json();
      setGeolocation(data);
    } catch (err) {
      console.log(`error code: ${err}`);
    }
  };

  // useEffect(() => {
  //   const fetchIp = async () => {
  //     try {
  //       const res = await fetch("https://api.ipify.org?format=json");
  //       const data = await res.json();
  //       console.log(
  //         `data returned from api route in input component is: ${data.ip}`
  //       );
  //       return data;
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   fetchIp();
  // }, []);

  return (
    <div className="input-and-feedback">
      <div className="form-container">
        <div className="input-container">
          <form className="form-wrapper" onSubmit={handleFormSubmit}>
            <input
              type="text"
              name="ipAddress"
              placeholder="Search for any IP address or domain"
              onChange={handleInputChange}
            />
            <button>
              <Image src={iconArrow} alt="icon-arrow" />
            </button>
          </form>
        </div>
      </div>
      <div className="feedback-container">
        <Dashboard />

        {/* ip address should return here */}
      </div>
      <div className="map-container">Map</div>
    </div>
  );
};

export default Input;
