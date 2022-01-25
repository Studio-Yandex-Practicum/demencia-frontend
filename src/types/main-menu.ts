export interface MainMenuItem {
  id: string;
  isActive: boolean;
  name: string;
  url: string;
}

export interface MainMenuData {
  mainMenuElements: MainMenuItem[];
}
