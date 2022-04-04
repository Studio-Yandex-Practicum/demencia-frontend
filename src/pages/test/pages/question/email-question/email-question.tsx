import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Section, Text1 } from "../../../../../ui/controls";
import { ArrowLeft, ArrowRight } from "../components/arrows";
import QuestionHeader from "../components/question-header";
import StyledInput from "../../../../../components/input-field";

import {
  ErrorText,
  StyledBoxInput,
  Link,
  StyledBoxArrowRight,
  StyledBoxArrowLeft,
  EmailInputBox,
  EmailCheckboxBox,
} from "./email-question-styles";
import { AppContext } from "../../../../../components/contexts";

const EmailQuestion: React.FC<{ number: number }> = ({ number }) => {
  const { setLastQuestionId } = useContext(AppContext);
  const navigate = useNavigate();

  const [isError, setIsError] = useState({
    email: false,
    checkbox: false,
  });

  const [values, setValues] = useState({
    email: "",
    personalData: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;
    setValues((prevState) => ({
      ...prevState,
      [name]: name === "personalData" ? checked : value,
    }));
  };

  const validateEmail = (email: string) => {
    const validate = email
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
    if (validate) {
      return true;
    } else {
      return false;
    }
  };

  const goForward = () => {
    const { email, personalData } = values;

    if (!validateEmail(email) || !personalData) {
      if (!validateEmail(email)) {
        setIsError((prevState) => ({
          ...prevState,
          ["email"]: true,
        }));
      }

      if (!personalData) {
        setIsError((prevState) => ({
          ...prevState,
          ["checkbox"]: true,
        }));
      }
    } else {
      if (setLastQuestionId) {
        setLastQuestionId(`${number + 1}`);
      }
      localStorage.setItem(`${number}`, email);
      navigate(`/test/question/${number + 1}`);
    }
  };

  useEffect(() => {
    if (localStorage.getItem(`${number}`)) {
      const localStorageEmail = localStorage.getItem(`${number}`);
      if (localStorageEmail) {
        setValues({ email: localStorageEmail, personalData: true });
      }
    } else {
      setValues({ email: "", personalData: false });
    }
  }, [number]);

  return (
    <>
      <Box>
        <QuestionHeader number={number} />

        <Section flex centered>
          <StyledBoxInput flex>
            <StyledBoxArrowLeft>
              <ArrowLeft
                onClick={() => navigate(`/test/question/${number - 1}`)}
              />
            </StyledBoxArrowLeft>
            <EmailInputBox flex column width="100%">
              <StyledInput
                name="email"
                type="email"
                onChange={handleChange}
                value={values.email}
                onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                  if (validateEmail(e.target.value)) {
                    setIsError((prevState) => ({
                      ...prevState,
                      ["email"]: false,
                    }));
                  }
                }}
                required
              />
              <EmailCheckboxBox mt={4} flex>
                <input
                  name="personalData"
                  type="checkbox"
                  onChange={handleChange}
                  checked={values.personalData}
                  onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                    if (e.target.checked) {
                      setIsError((prevState) => ({
                        ...prevState,
                        ["checkbox"]: false,
                      }));
                    }
                  }}
                />
                <Text1 ml={2}>
                  Я согласен(а) на обработку{" "}
                  <Link
                    href="https://xn--d1acamsh7dwd.net/Soglasie_na_obrabotku_personalnih_dannih.pdf"
                    target="_blank"
                  >
                    персональных данных
                  </Link>
                </Text1>
              </EmailCheckboxBox>
            </EmailInputBox>
            <StyledBoxArrowRight>
              <ArrowRight onClick={goForward} />
            </StyledBoxArrowRight>
          </StyledBoxInput>
          {isError.email && (
            <ErrorText>Введите корректное значение почты</ErrorText>
          )}
          {isError.checkbox && (
            <ErrorText>
              Дайте согласие на обработку персональных данных
            </ErrorText>
          )}
        </Section>
      </Box>
    </>
  );
};

export default EmailQuestion;
