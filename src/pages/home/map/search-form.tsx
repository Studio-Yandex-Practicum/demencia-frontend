import React, { useState } from "react";
import styled from "styled-components";
import { Button, Box } from "../../../ui/controls";
import { ButtonType, ScreenSize } from "../../../ui/types";
import puzzle from "../../../images/green-puzzle-translucent.svg";
import { useQuery } from "@apollo/client";
import { CentersData } from "../../../types/centers";
import { GET_CENTERS } from "../../../gql/query/centers";

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
  const [inputData, setInputData] = useState<string>("");
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [fetched, setFetched] = useState<string[]>([]);

  const useCityInfo = () => {
    const { data } = useQuery<CentersData>(GET_CENTERS, {
      fetchPolicy: "cache-first",
      variables: { city: inputData },
    });
    if (!data || !data.centers) return <div>Нет данных</div>;
    const centers = data?.centers;
    if (!centers.length) return <div>Нет данных2</div>;
    console.log(centers);
  };

  const renderData = () => {};

  return (
    <StyledDiv>
      <StyledWrapper>
        <HalfCircle />
        <StyledInput
          type="text"
          placeholder="Введите название города..."
          onChange={(e) => setInputData(e.target.value)}
        />
      </StyledWrapper>
      <Box>
        <StyledButton
          type={ButtonType.Primary}
          ghost
          borderWidth={0}
          onClick={useCityInfo}
        >
          Поиск
        </StyledButton>
      </Box>
      {/* <StyledDiv className={`${isVisible ? "visible" : ""}`}>
        {fetched.map((center, index) => (
          <StyledWrapper key={index}>
            <p>{center.city}</p>
            <p>{center.address}</p>
            <p>{center.phoneNo}</p>
          </StyledWrapper>
        ))}
      </StyledDiv> */}
    </StyledDiv>
  );
};

export default SearchForm;
