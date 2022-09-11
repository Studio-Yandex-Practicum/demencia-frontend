import { Box } from "../ui/controls";
import { TextBlock } from "../ui/controls/typography";
import { TypographyLevel } from "../ui/types";
import React from "react";
import { useQuery } from "@apollo/client";
import { SettingsData } from "../types/settings";
import { GET_SETTINGS } from "../gql/query/settings";

const DefaultCaption: React.FC = () => (
  <>"Благотворительный фонд «Память поколений»"</>
);

const NormalPageFooter: React.FC = () => {
  const currentDate = new Date();
  const { data } = useQuery<SettingsData>(GET_SETTINGS, {
    fetchPolicy: "cache-first",
  });

  if (!data || !data.settings.copyright) return <DefaultCaption />;

  const title = data.settings.copyright;

  if (!title.length) return <DefaultCaption />;

  return (
    <Box mr={2}>
      <TextBlock level={TypographyLevel.Text4} mb={1}>
        Сделано студентами Яндекс Практикума
      </TextBlock>
      <TextBlock level={TypographyLevel.Footer}>
        &copy; {currentDate.getFullYear()} {title}
      </TextBlock>
    </Box>
  );
};

export default NormalPageFooter;
