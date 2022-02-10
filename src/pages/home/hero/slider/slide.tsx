import {
  StyledBgImage,
  StyledBox,
  StyledContainer,
  Decor,
  Wrapper,
} from "./styles/swiper";
import { Link } from "../../../../ui/controls";
import { ContainerSize, TextColor } from "../../../../ui/types";
import { BackgroundColor } from "../../../../ui/types/background-color.enum";
import { Subtitle3 } from "../../../../ui/controls/typography";

import DOMPurify from "dompurify";
import ReactHtmlParser from "react-html-parser";

interface SlideProps {
  imageSource?: string;
  text?: string;
  linkTo?: string;
  linkTitle?: string;
}

const Slide: React.FC<SlideProps> = ({
  imageSource,
  text = "<div>Новость</div>",
  linkTo,
  linkTitle,
}) => {
  return (
    <>
      <Wrapper>
        <StyledContainer
          size={ContainerSize.MediumSmall}
          bgColor={BackgroundColor.Alt2}
        >
          <StyledBox height="140px" mt={2} mb={2} ml={2} mr={8}>
            <StyledBox mb={3}>
              <Subtitle3 uppercase={false} textColor={TextColor.Secondary}>
                {ReactHtmlParser(DOMPurify.sanitize(text))}
              </Subtitle3>
            </StyledBox>
            <StyledBox absolute top="135px">
              <Link to={linkTo || ""}>
                <Subtitle3
                  borderBottomOnHover
                  uppercase={false}
                  textColor={TextColor.Secondary}
                >
                  {linkTitle || "Подробнее..."}
                </Subtitle3>
              </Link>
            </StyledBox>
            <Decor />
          </StyledBox>
        </StyledContainer>
      </Wrapper>
      <StyledBgImage url={imageSource} />
    </>
  );
};

export default Slide;
