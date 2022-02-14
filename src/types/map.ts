export interface Region {
  id: string;
  geocode: string;
  centers: string;
  city: string;
  address: string;
  phoneNo: string;
}

export interface RegionsData {
  regions: Region[];
}
