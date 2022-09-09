import { useEffect } from "react";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { DescriptionPage, QuestionPage, ResultPage } from "./pages";
import { AppContext } from "../../../components/contexts";
import StartPage from "../pages/start/start";
import descriptionForMyself from "./components/description";

const TestPage = () => {
  const path = useLocation().pathname;
  const navigate = useNavigate();

  function setLastQuestionId(id: string) {
    switch (id) {
      case "26":
        localStorage.setItem("last_question", "result");
        break;
      case "description":
        localStorage.setItem("last_question", "description");
        break;
      case "start":
        localStorage.setItem("last_question", "start");
        break;
      default:
        localStorage.setItem("last_question", id);
        break;
    }
  }

  useEffect(() => {
    const lastQuestion = localStorage.getItem("last_question");
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
        navigate(`/test/question/${lastQuestion}`);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (path === "/test") {
    return <Navigate to="/test/start" />;
  }

  return (
    <AppContext.Provider value={{ setLastQuestionId }}>
      <Routes>
        <Route
          path="start"
          element={
            <StartPage
              forClosePerson={false}
              title="Данный тест рекомендуется пройти для проверки своего когнитивного статуса."
            />
          }
        />
        <Route
          path="description"
          element={<DescriptionPage>{descriptionForMyself}</DescriptionPage>}
        />
        <Route path="result" element={<ResultPage />} />
        <Route path="question/*" element={<QuestionPage />} />
      </Routes>
    </AppContext.Provider>
  );
};

export default TestPage;
