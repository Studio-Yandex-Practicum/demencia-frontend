export interface Partners {
  id: string;
  isActive: boolean;
  image: string;
  name: string;
  url: string;
}

export interface PartnersData {
  partners: Partners[];
}
