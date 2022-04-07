import styled from "styled-components";
import { Subtitle4, Text3 } from "../../../ui/controls/typography";
import { PaletteColor, ScreenSize } from "../../../ui/types";

const StyledBox = styled.div<{
  left: number;
  top: number;
}>`
  position: absolute;
  border: 5px solid ${PaletteColor.Green};
  border-radius: 15px;
  width: 300px;
  min-height: 150px;
  padding: 8px;
  background-color: ${PaletteColor.White};
  z-index: 3;
  left: ${(props) => props.left || 0}px;
  top: ${(props) => props.top || 0}px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: ${ScreenSize.Medium}px) {
    width: 250px;
    min-height: 90px;
  }
`;

const StyledTitle = styled(Subtitle4)`
  padding-left: 10px;
  @media (max-width: ${ScreenSize.Medium}px) {
    font-size: 12px;
  }
`;
const StyledText = styled(Text3)`
  @media (max-width: ${ScreenSize.Medium}px) {
    font-size: 10px;
  }
`;

const StyledLine = styled.div`
  border-top: 1px solid ${PaletteColor.Green};
  padding: 0 10px;
  margin-bottom: 10px;
`;

interface PopupProps {
  currentRegion: string;
  left: number;
  top: number;
}

const Popup: React.FC<PopupProps> = ({ currentRegion, left, top }) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const initData = sessionStorage.getItem(currentRegion)!;
  const data = JSON.parse(initData);

  return (
    <div>
      <StyledBox left={left} top={top}>
        {data.map(
          (region: {
            city: string;
            address: string;
            phoneNo: string;
            phoneNoSecondary: string;
          }) => (
            <div key={region.address}>
              <StyledTitle>{region.city}</StyledTitle>
              <StyledLine>
                <StyledText mt={2}>{region.address}</StyledText>
                <StyledText mt={1}>{region.phoneNo}</StyledText>
                <StyledText mt={1}>{region.phoneNoSecondary}</StyledText>
              </StyledLine>
            </div>
          )
        )}
      </StyledBox>
    </div>
  );
};

export default Popup;
