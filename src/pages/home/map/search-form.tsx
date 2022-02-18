import React, { useState, useRef } from "react";
import styled from "styled-components";
import { Button, Box } from "../../../ui/controls";
import { ButtonType, ScreenSize } from "../../../ui/types";
import puzzle from "../../../images/green-puzzle-translucent.svg";
import SearchResults from "./search-results";

const StyledDiv = styled.div`
  display: none;
  @media (max-width: ${ScreenSize.Small}px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 32px;
    min-height: 250px;
    max-width: 450px;
    padding: 0 0 50px;
    margin: 0 auto;
  }
  @media (max-width: ${ScreenSize.XSmall}px) {
    margin: 0 14px;
  }
  .visible {
    display: flex;
  }
`;

const StyledResultsArea = styled.div`
  width: 100%;
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 15px 0 0;
  .visible {
    display: flex;
  }
`;

const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 0;
  margin: 0;
`;

const StyledInput = styled.input`
  width: 100%;
  height: 45px;
  padding: 0 10px;
  border: 2px solid #782988;
  border-radius: 30px;
  background-color: #d8eae5;
  font-size: 18px;
  &:focus {
    outline: 3px solid #782988;
  }
`;

const HalfCircle = styled.img.attrs((props) => ({
  src: props.src || puzzle,
  alt: props.alt || "",
}))`
  width: 80px;
  height: 80px;
  margin-left: auto;
`;

const StyledButton = styled(Button)`
  width: 200px;
  color: #fff;
  background-color: #772988;
`;

const SearchForm: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [currentValue, setCurrentValue] = useState<string>("");

  const onButtonClick = () => {
    setCurrentValue(inputRef.current ? inputRef.current.value : "");
    setIsVisible(true);
  };

  return (
    <StyledDiv>
      <StyledWrapper>
        <HalfCircle />
        <StyledInput
          type="text"
          placeholder="Введите название города..."
          ref={inputRef}
        />
      </StyledWrapper>
      <Box>
        <StyledButton
          type={ButtonType.Primary}
          ghost
          borderWidth={0}
          onClick={onButtonClick}
        >
          Поиск
        </StyledButton>
      </Box>
      <StyledResultsArea className={`${isVisible ? "visible" : ""}`}>
        <SearchResults query={currentValue} />
      </StyledResultsArea>
    </StyledDiv>
  );
};

export default SearchForm;
