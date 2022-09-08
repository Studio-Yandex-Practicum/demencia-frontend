import { FC } from "react";
import styled from "styled-components";
import { ScreenSize, TextColor } from "../ui/types";
import { Subtitle3 } from "../ui/controls/typography";

const StyledCard = styled.div`
  margin: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  position: relative;
  justify-self: center;
  max-width: 100%;
  width: 100%;
  height: 336px;

  @media (max-width: ${ScreenSize.Large}px) {
    & {
      height: 325px;
    }
  }

  @media (max-width: ${ScreenSize.Small}px) {
    & {
      height: 310px;
      width: 92%;
    }
  }

  .card__video {
    width: 100%;
    height: 250px;
    border: 0;
  }
`;

interface VideoCardProps {
  videoSource: string;
  cardTitle: string;
}

export const VideoCard: FC<VideoCardProps> = ({ videoSource, cardTitle }) => {
  return (
    <StyledCard>
      <iframe className="card__video" src={videoSource} />
      <Subtitle3 mt={4} textColor={TextColor.Primary}>
        {cardTitle}
      </Subtitle3>
    </StyledCard>
  );
};
