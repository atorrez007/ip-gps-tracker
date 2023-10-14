"use client";
import { useState } from "react";
import "../Styles/TestStyles.css";
import { GeolocationResponse } from "@/Types/types";

export default function Test() {
  const [geoLocation, setGeolocation] = useState<GeolocationResponse | null>(
    null
  );

  async function callApi() {
    const res = await fetch(`/api/geolocation`);
    const data: GeolocationResponse = await res.json();
    console.log(data);
    setGeolocation(data);
  }

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
