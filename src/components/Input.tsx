"use client";
import Image from "next/image";
import "../Styles/InputStyles.css";
import iconArrow from "../assets/images/icon-arrow.svg";
import { FormEvent, useState } from "react";

const Input = () => {
  const [ipAddress, setIpAddress] = useState<string | null>();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIpAddress(e.target.value);
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIpAddress(ipAddress);
    alert(` You typed: ${ipAddress}`);
  };

  return (
    <div className="form-container">
      <div className="input-container">
        <form className="form-wrapper" onSubmit={handleFormSubmit}>
          <input
            type="text"
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
