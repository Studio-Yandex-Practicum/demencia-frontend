import React, { useContext } from "react";
import { Section } from "../../../../ui/controls";
import { Box, Button } from "../../../../ui/controls";
import {
  ButtonType,
  TextColor,
  TypographyLevel,
  ScreenSize,
} from "../../../../ui/types";
import { Subtitle1, Text1 } from "../../../../ui/controls";
import styled from "styled-components";
import { ArrowLeft, ArrowRight } from "./decor";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../../../components/contexts";

const StyleArrowLeft = styled(ArrowLeft)`
  margin-right: 10px;
  right: 0;
  left: 0;
`;

const StyleArrowRight = styled(ArrowRight)`
  margin-left: 10px;
  right: 0;
  left: 0;
`;

const StyledBox = styled(Box)`
  position: relative;
  flex-direction: row;
  text-align: center;
  justify-content: space-between;
  @media (max-width: ${ScreenSize.Medium}px) {
    flex-direction: column;
  }
`;

const StyledTestBox = styled(Box)`
  text-align: left;
  max-width: 1026px;
`;

const StyledButtonBox = styled(Box)`
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-end;
  padding-top: 0;
  margin: 0 auto;
  @media (max-width: ${ScreenSize.Medium}px) {
    //margin-top: 40px;
    margin: 40px auto 0 auto;
  }
`;

const StyleText1 = styled(Text1)`
  font-size: 26px;
  @media (max-width: ${ScreenSize.Medium}px) {
    margin: 10px auto 0;
  }
  @media (max-width: ${ScreenSize.XSmall}px) {
    font-size: 18px;
  }
`;

const StyleButton = styled(Button)`
  text-align: center;
  margin: 0 auto;
  @media (max-width: ${ScreenSize.XSmall}px) {
    font-size: 14px;
  }
`;

const DescriptionPage: React.FC = ({ children }) => {
  const { setLastQuestionId } = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <Box>
      <Section flex centered borderBox pt={7}>
        <StyledTestBox flex column>
          <Subtitle1
            maxWidth={1026}
            textColor={TextColor.Accent2}
            uppercase={false}
            level={TypographyLevel.Subtitle1}
          >
            Как выполнять тест?
          </Subtitle1>
          {children}
        </StyledTestBox>
      </Section>

      <Section flex centered borderBox pt={1} pb={10}>
        <StyledTestBox flex column>
          <StyledBox flex pb={10}>
            <Box>
              <StyleText1
                maxWidth={890}
                mt={2}
                mr={5}
                ml={0}
                textColor={TextColor.Primary}
                level={TypographyLevel.Subtitle3}
              >
                Для перехода между заданиями используйте кнопки:
              </StyleText1>
            </Box>
            <StyledButtonBox flex maxWidth={170}>
              <StyleArrowLeft />
              <StyleArrowRight />
            </StyledButtonBox>
          </StyledBox>
          <StyleButton
            type={ButtonType.Primary}
            width={310}
            level={TypographyLevel.Subtitle3}
            zoomOnHover
            zoomOutOnHover={false}
            onClick={() => {
              navigate("/test/question/1");
              if (setLastQuestionId) {
                setLastQuestionId(`1`);
              }
            }}
          >
            все понятно. Начать!
          </StyleButton>
          {/* </Link> */}
        </StyledTestBox>
      </Section>
    </Box>
  );
};

export default DescriptionPage;
