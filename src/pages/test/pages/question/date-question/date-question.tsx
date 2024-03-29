import React from "react";
import { Box, Section } from "../../../../../ui/controls";
import {
  ArrowLeft,
  ArrowRight,
} from "../../../for-myself/pages/question/components/arrows";
import {
  StyleSelect,
  StyleInput,
  StyledBoxInput,
  StyledBoxArrowRight,
  StyledBoxArrowLeft,
  StyledBoxSelect,
  StyledImg,
  StyledBoxCurrentSelect,
} from "./date-question-styles";
import { useNavigate } from "react-router-dom";
import QuestionHeader from "../question-header";
import arrowSelectDown from "../../../../../images/arrow-select-down.svg";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../../../components/contexts";
import { useMutation } from "@apollo/client";
import toast from "react-hot-toast";
import ErrorText from "../../../for-myself/pages/question/components/error-text";
import LoadingText from "../../../for-myself/pages/question/components/loading-text";
import {
  answerQuery,
  getTestId,
  getTestNumber,
  setTestNumber,
  testBaseUrl,
} from "../../../../../utils";

const months = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь",
];

const years = [...Array(new Date().getFullYear() - 1922 + 1)].map(
  (_, i) => 1922 + i
);

const DateQuestion: React.FC<{ number: number; forClosePerson: boolean }> = ({
  number,
  forClosePerson,
}) => {
  const [createAnswer, { loading }] = useMutation(answerQuery());
  const navigate = useNavigate();
  const { setLastQuestionId } = useContext(AppContext);
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("1");
  const [year, setYear] = useState("1922");
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const routeForTest = testBaseUrl(forClosePerson);

  const handleChangeDay = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (day.length === 2) {
      e.target.value = e.target.value.slice(0, 2);
    }
    if (Number(e.target.value) >= 31) {
      e.target.value = "31";
    }
    setDay(e.target.value);
  };

  const handleChangeMonth = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const str = e.target.value;
    if (str) {
      setMonth(str);
    }
  };

  const handleChangeYear = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const str = e.target.value;
    if (str) {
      setYear(str);
    }
  };

  useEffect(() => {
    if (getTestNumber(number, forClosePerson)) {
      const localStorageDate = getTestNumber(number, forClosePerson)?.split(
        "-"
      );
      if (localStorageDate) {
        const modifiedLocalStorageDate = localStorageDate?.map((item) => {
          if (item.startsWith("0")) {
            return item.slice(1);
          }
          return item;
        });

        setDay(modifiedLocalStorageDate[0]);
        setMonth(modifiedLocalStorageDate[1]);
        setYear(modifiedLocalStorageDate[2]);
      }
    } else {
      setDay("");
      setMonth("1");
      setYear("1922");
    }
  }, [forClosePerson, number]);

  const calculateDate = () => {
    return `${day.length === 1 ? `0${day}` : `${day}`}-${
      month.length === 1 ? `0${month}` : `${month}`
    }-${year}`;
  };

  function validateDate(y: string, m: string, d: string) {
    const dateEntered = new Date(Number(y), Number(m) - 1, Number(d));
    const today = new Date();
    if (
      today.getFullYear() <= Number(y) &&
      (today.getMonth() < Number(m) - 1 ||
        (today.getMonth() == Number(m) - 1 && today.getDate() < Number(d))) &&
      number === 2
    ) {
      setErrorMessage("Введенная дата не может быть больше текущей");
      setIsError(true);
    } else if (
      dateEntered.getFullYear() == Number(y) &&
      dateEntered.getMonth() == Number(m) - 1 &&
      dateEntered.getDate() == Number(d)
    ) {
      setErrorMessage("");
      setIsError(false);
      return true;
    } else if (
      Number(m) === 2 &&
      Number(d) >= 29 &&
      (Number(y) % 4 || (!(Number(y) % 100) && Number(y) % 400))
    ) {
      setErrorMessage(
        "Этот год не високосный, максимальное значение даты 28 февраля"
      );
      setIsError(true);
    } else if (Number(m) === 2 && Number(d) > 29) {
      setErrorMessage(
        "Данные введены не корректно, максимальное значение даты в заданном месяце 29"
      );
      setIsError(true);
    } else if ([4, 6, 9, 11].includes(Number(m)) && Number(d) > 30) {
      setErrorMessage(
        "Данные введены не корректно, максимальное значение даты в заданном месяце 30"
      );
      setIsError(true);
    } else {
      setErrorMessage("Данные введены не корректно, проверьте введенную дату");
      setIsError(true);
      return false;
    }
  }

  const goForward = () => {
    if (day && parseInt(day, 10) > 0) {
      setIsError(false);
      if (validateDate(year, month, day)) {
        const date = calculateDate();
        const testId = JSON.parse(getTestId(forClosePerson) || "");
        createAnswer({
          variables: {
            input: {
              answerValue: date,
              testCase: { id: testId },
              question: number,
            },
          },
        })
          .then((res) => {
            if (res.data.createAnswer.ok === true) {
              setTestNumber(number, date, forClosePerson);
              if (setLastQuestionId) {
                setLastQuestionId(`${number + 1}`);
              }
              const to =
                number === 25
                  ? `${routeForTest}/result`
                  : `${routeForTest}/question/${number + 1}`;
              navigate(to);
            }
          })
          .catch((err) => {
            console.log(err);
            toast.error(`Ошибка сервера`);
          });
      }
    } else {
      setErrorMessage(
        "Необходимо ответить на вопрос, прежде чем переходить к следующему"
      );
      setIsError(true);
      navigate("");
    }
  };

  return (
    <>
      <Box>
        <QuestionHeader number={number} forClosePerson={forClosePerson} />

        <Section centered flex>
          <StyledBoxInput flex maxWidth={1900}>
            <StyledBoxArrowLeft>
              <ArrowLeft
                onClick={() =>
                  navigate(`${routeForTest}/question/${number - 1}`)
                }
              />
            </StyledBoxArrowLeft>

            <StyledBoxSelect flex width="100%">
              <StyleInput
                type="number"
                min="1"
                max="31"
                step="1"
                defaultValue={day}
                onChange={handleChangeDay}
                onPaste={(e) => {
                  if (/[\D]/.test(e.clipboardData.getData("text"))) {
                    e.preventDefault();
                  }
                }}
                onKeyPress={(e) => {
                  if (!/[0-9]/.test(e.key)) {
                    e.preventDefault();
                  }
                }}
              />
              <StyledBoxCurrentSelect>
                <StyleSelect value={month} onChange={handleChangeMonth}>
                  {months.map((elem, index) => (
                    <option key={index} value={index + 1}>
                      {elem}
                    </option>
                  ))}
                </StyleSelect>
                <StyledImg src={arrowSelectDown} />
              </StyledBoxCurrentSelect>
              <StyledBoxCurrentSelect>
                <StyleSelect value={year} onChange={handleChangeYear}>
                  {years.map((elem, index) => (
                    <option key={index} value={elem}>
                      {elem}
                    </option>
                  ))}
                </StyleSelect>
                <StyledImg src={arrowSelectDown} />
              </StyledBoxCurrentSelect>
            </StyledBoxSelect>

            <StyledBoxArrowRight>
              <ArrowRight onClick={goForward} />
            </StyledBoxArrowRight>
          </StyledBoxInput>
          {isError && <ErrorText>{errorMessage}</ErrorText>}
          {loading && <LoadingText>Отправка ответа...</LoadingText>}
        </Section>
      </Box>
    </>
  );
};

export default DateQuestion;
