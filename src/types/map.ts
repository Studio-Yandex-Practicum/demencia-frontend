export interface Regions {
  id: string;
  geocode: string;
  centers: string;
  city: string;
  address: string;
  phoneNo: string;
}

export interface RegionsData {
  regions: Regions[];
}
