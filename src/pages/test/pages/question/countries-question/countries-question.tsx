import React, { ChangeEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box } from "../../../../../ui/controls";
import QuestionHeader from "../components/question-header";
import StyledInput from "../../../../../components/input-field";
import { useState } from "react";
import {
  StyledSection,
  StyledArrowLeft,
  StyledArrowRight,
  StyledBoxInput,
  ErrorText,
} from "./countries-question-styles";

const CountriesQuestion: React.FC<{ number: number }> = ({ number }) => {
  const navigate = useNavigate();
  const [isError, setIsError] = useState(false);
  const [inputsArray, setInputArray] = useState(new Array(12).fill(""));

  const saveInputs = () => {
    localStorage.setItem(`${number}`, JSON.stringify(inputsArray));
  };

  const onBack = () => {
    saveInputs();
    if (number > 1) {
      navigate(`/test/question/${number - 1}`);
    }
  };

  const onForward = () => {
    saveInputs();
    const isValid = !inputsArray.filter((input) => input.trim().length == 0)
      .length;
    if (!isValid) {
      setIsError(true);
    } else {
      const finalDataResponse = inputsArray.toString(); //финальные данные теста, доделать при интеграции с бэкендом
      navigate(number === 25 ? "/test/result" : `/test/question/${number + 1}`);
    }
  };

  function handleInput(index: number, event: ChangeEvent<HTMLInputElement>) {
    const updated = [...inputsArray];
    updated[index] = event.target.value;
    setInputArray(updated);
  }

  useEffect(() => {
    if (localStorage.getItem(`${number}`)) {
      const answer = JSON.parse(localStorage.getItem(`${number}`) || "");
      setInputArray(answer);
    }
  }, [number]);

  return (
    <Box>
      <QuestionHeader number={number} />

      <StyledSection flex direction="row" centered>
        <StyledArrowLeft onClick={() => onBack()} />
        <StyledBoxInput>
          {inputsArray.map((element, index) => (
            <StyledInput
              key={index}
              value={inputsArray[index]}
              onChange={(event) => handleInput(index, event)}
            />
          ))}
        </StyledBoxInput>
        <StyledArrowRight onClick={() => onForward()} />
      </StyledSection>
      {isError && (
        <ErrorText>
          Необходимо ответить на вопрос, прежде, чем переходить к следующему
        </ErrorText>
      )}
    </Box>
  );
};

export default CountriesQuestion;
