"use client";
import Image from "next/image";
import "../Styles/InputStyles.css";
import iconArrow from "../assets/images/icon-arrow.svg";
import { FormEvent, useState } from "react";
import { GeolocationResponse } from "@/Types/types";

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

  return (
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
  );
};

export default Input;
