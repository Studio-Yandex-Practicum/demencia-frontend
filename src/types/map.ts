export interface Center {
  city: string;
  address: string;
  phoneNo: string;
  phoneNoSecondary: string;
  description: string;
  openingHours: string;
}

export interface Region {
  id: string;
  geocode: string;
  centers: Center[];
}

export interface RegionsData {
  regions: Region[];
}
