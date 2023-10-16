"use client";
import Image from "next/image";
import "../Styles/InputStyles.css";
import iconArrow from "../assets/images/icon-arrow.svg";
import { FormEvent, useState } from "react";

const Input = () => {
  const [ipAddress, setIpAddress] = useState<string | null>();
  const [formData, setFormData] = useState({
    ipAddress: "",
  });
  const [errors, setErrors] = useState<any>({});
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setIpAddress(value);
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Fix type later.
    const validationErrors: any = {};
    if (!formData.ipAddress.trim()) {
      validationErrors.ipAddress = "IP Address required";
    }
    setErrors(validationErrors);
    setIpAddress(ipAddress);
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
        {errors.ipAddress && <span> {errors.ipAddress}</span>}
      </div>
    </div>
  );
};

export default Input;
