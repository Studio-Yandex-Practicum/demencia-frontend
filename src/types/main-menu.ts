export interface MainMenuItem {
  id: string;
  createdAt: string;
  updatedAt: string;
  isActive: boolean;
  name: string;
  url: string;
}

export interface MainMenuData {
  meinMenuElements: MainMenuItem[];
}
