export interface RegionCenter {
  city: string;
  address: string;
  phoneNo: string;
  phoneNoSecondary: string;
}

export interface CentersData {
  centers: RegionCenter[];
}
