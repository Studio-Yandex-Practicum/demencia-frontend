export interface LeftMenuElement {
  isActive: boolean;
  name: string;
  url: string;
}

export interface LeftMenuElementsData {
  leftMenuElements: LeftMenuElement[];
}
