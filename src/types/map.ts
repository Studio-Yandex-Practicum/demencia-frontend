export interface Center {
  city: string;
  address: string;
  phoneNo: string;
}

export interface Region {
  id: string;
  geocode: string;
  centers: Center[];
}

export interface RegionsData {
  regions: Region[];
}
