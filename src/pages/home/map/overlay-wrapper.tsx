import { useQuery } from "@apollo/client";
import { RegionsData } from "../../../types/map";
import { GET_REGIONS } from "../../../gql/query/map";
import React from "react";
import { toast } from "react-hot-toast";
import Overlay from "./overlay";
import styled from "styled-components";
import { Box } from "../../../ui/controls";
import { Subtitle4 } from "../../../ui/controls/typography";
import { PaletteColor, ScreenSize } from "../../../ui/types";

const StyledBox = styled(Box)`
  position: absolute;
  border: 5px solid ${PaletteColor.Green};
  border-radius: 15px;
  width: 300px;
  min-height: 150px;
  padding: 8px;
  background-color: ${PaletteColor.White};
  z-index: 3;
  left: 0px;
  top: 0px;
  @media (max-width: ${ScreenSize.Medium}px) {
    width: 250px;
    min-height: 90px;
  }
`;

const StyledTitle = styled(Subtitle4)`
  @media (max-width: ${ScreenSize.Medium}px) {
    font-size: 12px;
  }
`;

const EmptyPopup: React.FC<{ title: string }> = ({ title }) => (
  <StyledBox>
    <StyledTitle>{title}</StyledTitle>
  </StyledBox>
);

const OverlayWrapper: React.FC = () => {
  const clientWidth = window.innerWidth;
  const isMobile = clientWidth < ScreenSize.Small;
  const { data, loading, error } = useQuery<RegionsData>(GET_REGIONS, {
    skip: isMobile,
  });

  const handleQueryProcess = () => {
    if (loading) return <EmptyPopup title="Загрузка..." />;

    if (error || !data) {
      toast.error(`Не удалось загрузить центры профилактики с сервера`, {
        id: "error",
      });
      return <EmptyPopup title="Ошибка загрузки данных!" />;
    }
  };

  if (!isMobile) {
    handleQueryProcess();
  }

  return <Overlay regions={data ? data.regions : []} />;
};

export default OverlayWrapper;
