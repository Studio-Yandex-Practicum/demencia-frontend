export interface Settings {
  siteName: string;
  copyright: string;
  metaDescription: string;
  mainSectionButtonLabel: string;
  aboutSection: string;
  aboutSectionTerm: string;
  aboutSectionTermOpenLabel: string;
  aboutSectionTermCloseLabel: string;
  aboutSectionActionTitle: string;
  aboutSectionActionSubtitle: string;
  aboutSectionInfo: string;
  aboutSectionButtonLabel: string;
  newsSection: string;
  newsSectionUrlLabel: string;
  partnersSection: string;
  partnersSectionSubtitle: string;
  mapSection: string;
  mapSectionSubtitle: string;
  mapSectionInfo: string;
  fundSection: string;
  fundSectionInfo: string;
  fundSectionUrlLabel: string;
  fundSectionUrl: string;
}

export interface SettingsData {
  settings: Settings;
}
