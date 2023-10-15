"use client";
import { useEffect, useState } from "react";
import "../Styles/TestStyles.css";
import { GeolocationResponse } from "@/Types/types";

export default function Test() {
  const [ipAddress, setIpAddress] = useState<string>();
  const [geoLocation, setGeolocation] = useState<GeolocationResponse | null>(
    null
  );

  async function callApi() {
    const res = await fetch(
      `/api/geolocation?ipAddress=${ipAddress ? ipAddress : null}`
    );
    const data: GeolocationResponse = await res.json();
    setGeolocation(data);
  }
  // Will be used to fetch user's ip through ipify.
  // This is a different endpoint.
  useEffect(() => {
    const fetchIp = async () => {
      try {
        const res = await fetch("https://api.ipify.org?format=json");
        const data = await res.json();
        setIpAddress(data.ip);
      } catch (err) {
        console.log(err);
      }
    };
    fetchIp();
  }, []);
  return (
    <div className="test">
      <ul>Server Component API Test</ul>
      <div className="test">
        {geoLocation ? geoLocation?.ip : ""}
        {geoLocation ? geoLocation.location?.region : ""}
        {geoLocation ? geoLocation?.isp : ""}

        <button onClick={callApi}>Submit</button>
      </div>
    </div>
  );
}
