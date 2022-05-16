import React, { ChangeEvent, useContext, useEffect } from "react";
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
} from "./countries-question-styles";
import { AppContext } from "../../../../../components/contexts";
import { useMutation } from "@apollo/client";
import { CREATE_ANSWER } from "../../../../../gql/mutation/create-answer";
import toast from "react-hot-toast";
import ErrorText from "../components/error-text";
import LoadingText from "../components/loading-text";

const CountriesQuestion: React.FC<{ number: number }> = ({ number }) => {
  const [createAnswer, { loading }] = useMutation(CREATE_ANSWER);
  const { setLastQuestionId } = useContext(AppContext);
  const navigate = useNavigate();
  const [isError, setIsError] = useState(false);
  const [inputsArray, setInputArray] = useState(new Array(12).fill(""));
  const [errorText, setErrorText] = useState("");

  const onBack = () => {
    if (number > 1) {
      navigate(`/test/question/${number - 1}`);
    }
  };

  const onForward = () => {
    const isValid = !inputsArray.filter((input) => input.trim().length == 0)
      .length;
    if (!isValid) {
      setErrorText(
        "Необходимо ответить на вопрос, прежде чем переходить к следующему"
      );
      setIsError(true);
    } else {
      const finalDataResponse = inputsArray.toString(); //финальные данные теста, доделать при интеграции с бэкендом

      if (finalDataResponse.length > 255) {
        setErrorText("Общая длина всех названий превышает допустимую.");
        setIsError(true);
        return;
      }

      setIsError(false);

      const testId = JSON.parse(localStorage.getItem("test_id") || "");
      createAnswer({
        variables: {
          input: {
            answerValue: finalDataResponse,
            testCase: { id: testId },
            question: number,
          },
        },
      })
        .then((res) => {
          if (res.data.createAnswer.ok === true) {
            localStorage.setItem(`${number}`, finalDataResponse);
            if (setLastQuestionId) {
              setLastQuestionId(`${number + 1}`);
            }
            const to =
              number === 25 ? "/test/result" : `/test/question/${number + 1}`;
            navigate(to);
          }
        })
        .catch((err) => {
          console.log(err);
          toast.error(`Ошибка сервера`);
        });
    }
  };

  function handleInput(index: number, event: ChangeEvent<HTMLInputElement>) {
    const updated = [...inputsArray];
    updated[index] = event.target.value.replace(
      /['"`{}\[\]<>\/\\!=\s]|[\uD83C|\uD83D|\uD83E][\uDC00-\uDFFF][\u200D|\uFE0F]|[\uD83C|\uD83D|\uD83E][\uDC00-\uDFFF]|[0-9|*|#]\uFE0F\u20E3|[0-9|#]\u20E3|[\u203C-\u3299]\uFE0F\u200D|[\u203C-\u3299]\uFE0F|[\u2122-\u2B55]|\u303D|[\A9|\AE]\u3030|\uA9|\uAE|\u3030/gi,
      ""
    );
    setInputArray(updated);
  }

  useEffect(() => {
    if (localStorage.getItem(`${number}`)) {
      const answer = localStorage.getItem(`${number}`) || "";
      setInputArray(answer.split(","));
    } else {
      setInputArray(new Array(12).fill(""));
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
              maxLength={100}
              onChange={(event) => handleInput(index, event)}
            />
          ))}
        </StyledBoxInput>
        <StyledArrowRight onClick={() => onForward()} />
      </StyledSection>
      {isError && <ErrorText>{errorText}</ErrorText>}
      {loading && <LoadingText>Отправка ответа...</LoadingText>}
    </Box>
  );
};

export default CountriesQuestion;
