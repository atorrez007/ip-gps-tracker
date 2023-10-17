export type GeolocationResponse = {
  ip: string;
  location: {
    country: string;
    region: string;
  };
  isp: string;
};

export type validationErrorType = {
  ipAddress: string | null;
};
