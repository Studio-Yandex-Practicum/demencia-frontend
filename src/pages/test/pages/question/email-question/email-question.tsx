import { useState, useEffect } from "react";
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
} from "./email-question-styles";

const EmailQuestion: React.FC<{ number: number }> = ({ number }) => {
  const navigate = useNavigate();

  const [isError, setIsError] = useState(false);

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
    return email
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const goForward = () => {
    const { email, personalData } = values;
    if (validateEmail(email) && personalData) {
      setIsError(false);

      localStorage.setItem(`${number}`, email);
      navigate(`/test/question/${number + 1}`);
    } else {
      setIsError(true);
      navigate("");
    }
  };

  useEffect(() => {
    if (localStorage.getItem(`${number}`)) {
      const localStorageEmail = localStorage.getItem(`${number}`);
      if (localStorageEmail) {
        setValues({ email: localStorageEmail, personalData: true });
      }
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
            <Box flex column width="100%">
              <StyledInput
                name="email"
                type="email"
                onChange={handleChange}
                value={values.email}
                required
              />
              <EmailInputBox mt={4} flex>
                <input
                  name="personalData"
                  type="checkbox"
                  onChange={handleChange}
                  checked={values.personalData}
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
              </EmailInputBox>
            </Box>
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

export default EmailQuestion;
