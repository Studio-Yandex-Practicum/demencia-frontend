import { Box, Section } from "../../../../../ui/controls";
import { ArrowLeft, ArrowRight } from "../components/arrows";
import {
  StyleSelect,
  StyleInput,
  StyledBoxInput,
  StyledBoxArrowRight,
  StyledBoxArrowLeft,
  StyledBoxSelect,
  StyledImg,
  StyledBoxCurrentSelect,
  ErrorText,
} from "./date-question-styles";
import { useNavigate } from "react-router-dom";
import QuestionHeader from "../components/question-header";
import arrowSelect from "../../../../../images/arrow-select.svg";
import { useEffect, useState } from "react";

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

const DateQuestion: React.FC<{ number: number }> = ({ number }) => {
  const navigate = useNavigate();
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("1");
  const [year, setYear] = useState("1922");
  const [isError, setIsError] = useState(false);

  const handleChangeDay = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (day.length === 2) {
      e.target.value = e.target.value.slice(0, 2);
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
    if (localStorage.getItem(`${number}`)) {
      const localStorageDate = localStorage.getItem(`${number}`)?.split("-");
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
  }, [number]);

  const calculateDate = () => {
    return `${day.length === 1 ? `0${day}` : `${day}`}-${
      month.length === 1 ? `0${month}` : `${month}`
    }-${year}`;
  };

  const goForward = () => {
    if (day && parseInt(day, 10) < 31 && parseInt(day, 10) > 0) {
      setIsError(false);

      const date = calculateDate();

      localStorage.setItem(`${number}`, date);

      navigate(`/test/question/${number + 1}`);
    } else {
      setIsError(true);
      navigate("");
    }
  };

  return (
    <>
      <Box>
        <QuestionHeader number={number} />

        <Section centered flex>
          <StyledBoxInput flex maxWidth={1900}>
            <StyledBoxArrowLeft>
              <ArrowLeft
                onClick={() => navigate(`/test/question/${number - 1}`)}
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
                <StyledImg src={arrowSelect} />
              </StyledBoxCurrentSelect>
              <StyledBoxCurrentSelect>
                <StyleSelect value={year} onChange={handleChangeYear}>
                  {years.map((elem, index) => (
                    <option key={index} value={elem}>
                      {elem}
                    </option>
                  ))}
                </StyleSelect>
                <StyledImg src={arrowSelect} />
              </StyledBoxCurrentSelect>
            </StyledBoxSelect>

            <StyledBoxArrowRight>
              <ArrowRight onClick={goForward} />
            </StyledBoxArrowRight>
          </StyledBoxInput>
          {isError && (
            <ErrorText>
              Необходимо ответить на вопрос, прежде, чем переходить к следующему
            </ErrorText>
          )}
        </Section>
      </Box>
    </>
  );
};

export default DateQuestion;
