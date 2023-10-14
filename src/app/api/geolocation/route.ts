import { GeolocationResponse } from "@/Types/types";
import { NextResponse } from "next/server";

const DATA_SOURCE_URL = `https://geo.ipify.org/api/v2/country?apiKey=${process.env.API_KEY}&ipAddress=`;

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const ipAddress = searchParams.get("ipAddress");
  let url = "";
  ipAddress
    ? (url = `${DATA_SOURCE_URL}&ipAddress=${ipAddress}`)
    : (url = `${DATA_SOURCE_URL}`);

  const res = await fetch(url);

  const data: GeolocationResponse = await res.json();
  // console.log(data);
  return NextResponse.json(data);
}
