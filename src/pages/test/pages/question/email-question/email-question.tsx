import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Section, Text1 } from "../../../../../ui/controls";
import {
  ArrowLeft,
  ArrowRight,
} from "../../../for-myself/pages/question/components/arrows";
import QuestionHeader from "../question-header";
import StyledInput from "../../../../../components/input-field";

import validator from "validator";

import {
  StyledBoxInput,
  Link,
  StyledBoxArrowRight,
  StyledBoxArrowLeft,
  EmailInputBox,
  EmailCheckboxBox,
} from "./email-question-styles";
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

const EmailQuestion: React.FC<{ number: number; forClosePerson: boolean }> = ({
  number,
  forClosePerson,
}) => {
  const [createAnswer, { loading }] = useMutation(answerQuery(forClosePerson));
  const { setLastQuestionId } = useContext(AppContext);
  const navigate = useNavigate();
  const routeForTest = testBaseUrl(forClosePerson);

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
    const text = email.toLowerCase();
    return validator.isEmail(text);
  };

  const goForward = () => {
    const { email, personalData } = values;

    const emailIsValid = validateEmail(email);

    if (!emailIsValid || !personalData) {
      if (!emailIsValid) {
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
      const testId = JSON.parse(getTestId(forClosePerson) || "");
      createAnswer({
        variables: {
          input: {
            answerValue: email,
            testCase: { id: testId },
            question: number,
          },
        },
      })
        .then((res) => {
          if (res.data.createAnswer.ok === true) {
            setTestNumber(number, email, forClosePerson);
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
  };

  useEffect(() => {
    if (getTestNumber(number, forClosePerson)) {
      const localStorageEmail = getTestNumber(number, forClosePerson);
      if (localStorageEmail) {
        setValues({ email: localStorageEmail, personalData: true });
      }
    } else {
      setValues({ email: "", personalData: false });
    }
  }, [number, forClosePerson]);

  return (
    <>
      <Box>
        <QuestionHeader number={number} forClosePerson={forClosePerson} />

        <Section flex centered>
          <StyledBoxInput flex>
            <StyledBoxArrowLeft>
              <ArrowLeft
                onClick={() =>
                  navigate(`${routeForTest}/question/${number - 1}`)
                }
              />
            </StyledBoxArrowLeft>
            <EmailInputBox flex column width="100%">
              <StyledInput
                name="email"
                type="email"
                maxLength={100}
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
                  Я согласен(-на) на обработку{" "}
                  <Link
                    href="https://xn--d1acamsh7dwd.net/Soglasie_na_obrabotku_personalnih_dannih.pdf"
                    target="_blank"
                  >
                    персональных данных.
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
          {loading && <LoadingText>Отправка ответа...</LoadingText>}
        </Section>
      </Box>
    </>
  );
};

export default EmailQuestion;
