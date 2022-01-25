import { gql } from "@apollo/client";

const GET_SETTINGS = gql`
  query getSettings {
    settings {
      siteName
      copyright
      metaDescription
      mainSectionButtonLabel
      aboutSection
      aboutSectionTerm
      aboutSectionTermOpenLabel
      aboutSectionTermCloseLabel
      aboutSectionActionTitle
      aboutSectionActionSubtitle
      aboutSectionInfo
      aboutSectionButtonLabel
      newsSection
      newsSectionUrlLabel
      partnersSection
      partnersSectionSubtitle
      mapSection
      mapSectionSubtitle
      mapSectionInfo
      fundSection
      fundSectionInfo
      fundSectionUrlLabel
      fundSectionUrl
    }
  }
`;
export { GET_SETTINGS };
