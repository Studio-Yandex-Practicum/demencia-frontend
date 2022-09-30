import { useEffect } from "react";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { testBaseUrl } from "../../../utils";
import { AppContext } from "../../../components/contexts";
import StartPage from "../pages/start/start";
import { QuestionPage } from "./pages";
import TestDescription from "./components/description";
import DescriptionPage from "../pages/description/description";
import ResultPage from "../pages/result/result";

const TestForClosePersonPage = () => {
  const path = useLocation().pathname;
  const navigate = useNavigate();
  const baseUrl = testBaseUrl(true);

  function setLastQuestionId(id: string) {
    switch (id) {
      case "27":
        localStorage.setItem("last_question_for_close_person", "result");
        break;
      case "description":
        localStorage.setItem("last_question_for_close_person", "description");
        break;
      case "start":
        localStorage.setItem("last_question_for_close_person", "start");
        break;
      default:
        localStorage.setItem("last_question_for_close_person", id);
        break;
    }
  }

  useEffect(() => {
    const lastQuestion = localStorage.getItem("last_question_for_close_person");
    if (lastQuestion) {
      if (isNaN(Number(lastQuestion))) {
        switch (lastQuestion) {
          case "result":
            navigate("result");
            break;
          case "description":
            navigate("description");
            break;
          case "start":
            navigate("start");
            break;
          default:
            navigate("start");
            break;
        }
      } else {
        navigate(`${baseUrl}/question/${lastQuestion}`);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (path === baseUrl) {
    return <Navigate to={`${baseUrl}/start`} />;
  }

  return (
    <AppContext.Provider value={{ setLastQuestionId }}>
      <Routes>
        <Route
          path="start"
          element={
            <StartPage
              forClosePerson={true}
              title="Данный тест рекомендуется пройти при подозрении на наличие какого-либо когнитивного расстройства,
связанного с возрастом, у пожилых людей и людей старшего возраста."
            />
          }
        />
        <Route
          path="description"
          element={
            <DescriptionPage forClosePerson={true}>
              <TestDescription />
            </DescriptionPage>
          }
        />
        <Route path="result" element={<ResultPage forClosePerson={true} />} />
        <Route path="question/*" element={<QuestionPage />} />
      </Routes>
    </AppContext.Provider>
  );
};

export default TestForClosePersonPage;
