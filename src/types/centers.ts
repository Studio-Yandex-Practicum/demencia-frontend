export interface RegionCenter {
  city: string;
  address: string;
  phoneNo: string;
  phoneNoSecondary: string;
  description: string;
  openingHours: string;
}

export interface CentersData {
  centers: RegionCenter[];
}
