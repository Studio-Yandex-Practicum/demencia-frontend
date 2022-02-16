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
  display: block;

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
const StyledText = styled(Text3)`
  @media (max-width: ${ScreenSize.Medium}px) {
    font-size: 10px;
  }
`;

interface PopupProps {
  currentRegion: string;
  left: number;
  top: number;
}

const Popup: React.FC<PopupProps> = ({ currentRegion, left, top }) => {
  const initData = sessionStorage.getItem(currentRegion);

  if (!initData) {
    return <div />;
  }

  const data = JSON.parse(initData);

  console.log(data);

  return (
    <div>
      {data.map(
        (region: { city: string; address: string; phoneNo: string }) => (
          <StyledBox key={region.address} left={left} top={top}>
            <StyledTitle>{region.city}</StyledTitle>
            <StyledText mt={2}>{region.address}</StyledText>
            <StyledText mt={1}>{region.phoneNo}</StyledText>
          </StyledBox>
        )
      )}
    </div>
  );
};

export default Popup;
