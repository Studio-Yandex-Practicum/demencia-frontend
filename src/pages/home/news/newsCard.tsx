import { FC } from "react";
import styled from "styled-components";
import { Box } from "../../../ui/controls";
import { ScreenSize, TextColor } from "../../../ui/types";
import { Text4, Subtitle3 } from "../../../ui/controls/typography";
import { Link } from "../../../ui/controls";

const StyledImage = styled.img`
  width: 100%;
`;

const CardContainer = styled(Box)`
  max-width: 400px;

  @media screen and (max-width: 1100px) {
    max-width: 460px;
  }
  @media (max-width: ${ScreenSize.Medium}px) {
    max-width: none;
  }
`;

const StyledSubtitle3 = styled(Subtitle3)`
  uppercase: false;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  font-size: 14px;
  @media (max-width: ${ScreenSize.Small}px) {
    -webkit-line-clamp: 3;
  }
  @media (max-width: ${ScreenSize.XSmall}px) {
    font-size: 16px;
  }
  @media (max-width: ${ScreenSize.XXSmall}px) {
    -webkit-line-clamp: 2;
  }
`;

const StyledText4 = styled(Text4)`
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  @media (max-width: ${ScreenSize.Small}px) {
    -webkit-line-clamp: 3;
  }
  @media (max-width: ${ScreenSize.XSmall}px) {
    -webkit-line-clamp: 6;
  }
  @media (max-width: ${ScreenSize.XXSmall}px) {
    -webkit-line-clamp: 5;
  }
`;

interface INewsCard {
  id: string;
  title: string;
  subTitle: string;
  image: string;
  urlLabel: string;
}

const NewsCard: FC<INewsCard> = ({ id, title, subTitle, image, urlLabel }) => {
  return (
    <Link
      zoomTextOnHover={false}
      borderBottomOnHover={false}
      to={`/article/${id}` || "/"}
      uppercase={false}
    >
      <CardContainer width="100%">
        <Box mb={2}>
          <StyledImage src={image} />
        </Box>
        <Box>
          <Box>
            <StyledSubtitle3 textColor={TextColor.Primary}>
              {title}
            </StyledSubtitle3>
          </Box>
          <Box mt={1}>
            <StyledText4>{subTitle}</StyledText4>
          </Box>
          <Link
            to={`/article/${id}` || "/"}
            uppercase={false}
            zoomTextOnHover={false}
            borderBottomOnHover={false}
          >
            <Box mt={2}>
              <Text4 textColor={TextColor.Accent2} uppercase={false}>
                <strong>{urlLabel} &rarr;</strong>
              </Text4>
            </Box>
          </Link>
        </Box>
      </CardContainer>
    </Link>
  );
};

export default NewsCard;
