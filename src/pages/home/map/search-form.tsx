import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { Button, Box } from "../../../ui/controls";
import { ButtonType, ScreenSize, TextColor } from "../../../ui/types";
import { Subtitle3, Text2 } from "../../../ui/controls/typography";
import puzzle from "../../../images/green-puzzle-translucent.svg";
import { useLazyQuery } from "@apollo/client";
import { toast } from "react-hot-toast";
import { CentersData } from "../../../types/centers";
import { GET_CENTERS } from "../../../gql/query/centers";

const StyledSearchForm = styled.div`
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
  height: 55px;
  padding: 0 10px;
  border-radius: 30px;
  border: 2px solid #782988;
  box-sizing: border-box;
  background-color: #d8eae5;
  font-size: 18px;
  &:focus {
    outline: none;
    border: 4px solid #782988;
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
  &:disabled {
    opacity: 0.6;
    transform: none;
    translate: none;
  }
`;

const StyledTitle = styled.div`
  width: 100%;
  padding: 0 0 15px;
  border-bottom: 1px solid #429e84;
  display: flex;
  place-content: center;
`;

const StyledCard = styled.div`
  width: 100%;
  box-sizing: border-box;
  border-bottom: 1px solid #429e84;
  margin: 0;
  padding: 10px;
`;

const SearchForm: React.FC = () => {
  const buttonRef = useRef<HTMLInputElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [getCenters, { called, loading, error, data }] =
    useLazyQuery<CentersData>(GET_CENTERS, { fetchPolicy: "cache-first" });
  const centers = data?.centers;
  const currentCity = centers?.find((item) =>
    Object.keys(item.city == inputRef.current?.value)
  );

  useEffect(() => {
    if (inputRef.current && inputRef.current.value) {
      if (buttonRef.current) {
        buttonRef.current.disabled = false;
      }
    } else {
      if (buttonRef.current) {
        buttonRef.current.disabled = true;
        setIsVisible(false);
      }
    }
  }, []);

  const handleInputChange = () => {
    if (
      inputRef.current &&
      inputRef.current.value &&
      inputRef.current.value.length > 2
    ) {
      if (buttonRef.current) {
        buttonRef.current.disabled = false;
      }
    } else {
      if (buttonRef.current) {
        buttonRef.current.disabled = true;
        setIsVisible(false);
      }
    }
  };

  const onButtonClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    getCenters({ variables: { city: inputRef.current?.value } });
    setIsVisible(true);
  };

  const handleQueryProcess = () => {
    if (loading) {
      return <Subtitle3 textColor={TextColor.Accent1}>Загрузка...</Subtitle3>;
    }

    if (error) {
      toast.error(`${error}`, { id: "error" });
      return <Text2 textColor={TextColor.Shadow}>Ошибка</Text2>;
    }

    if (!data || !centers) {
      toast.error("Не удалось получить адреса офисов", { id: "error" });
      return <Text2 textColor={TextColor.Shadow}>Нет данных</Text2>;
    }

    if (!centers.length) {
      return <Text2 textColor={TextColor.Shadow}>Совпадений не найдено</Text2>;
    }
  };

  return (
    <StyledSearchForm>
      <StyledWrapper>
        <HalfCircle />
        <StyledInput
          type="text"
          placeholder="Введите название города..."
          onChange={handleInputChange}
          ref={inputRef}
        />
      </StyledWrapper>
      <Box>
        <StyledButton
          type={ButtonType.Primary}
          ghost
          borderWidth={0}
          onClick={onButtonClick}
          ref={buttonRef}
        >
          Поиск
        </StyledButton>
      </Box>
      <StyledResultsArea className={`${isVisible ? "visible" : ""}`}>
        {called && handleQueryProcess()}
        <StyledWrapper>
          <StyledTitle>
            <Subtitle3 textColor={TextColor.Accent1}>
              {currentCity?.city}
            </Subtitle3>
          </StyledTitle>
          {centers?.map((center, index) => (
            <StyledCard key={index}>
              <Text2 textColor={TextColor.Shadow}>{center.description}</Text2>
              <Text2 textColor={TextColor.Shadow}>{center.address}</Text2>
              <Text2 textColor={TextColor.Shadow}>{center.openingHours}</Text2>
              <Text2 textColor={TextColor.Shadow}>{center.phoneNo}</Text2>
              <Text2 textColor={TextColor.Shadow}>
                {center.phoneNoSecondary}
              </Text2>
            </StyledCard>
          ))}
        </StyledWrapper>
      </StyledResultsArea>
    </StyledSearchForm>
  );
};

export default SearchForm;
