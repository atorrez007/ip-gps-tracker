export type GeolocationResponse = {
  ip: string;
  location: {
    country: string;
    region: string;
  };
  isp: string;
};
