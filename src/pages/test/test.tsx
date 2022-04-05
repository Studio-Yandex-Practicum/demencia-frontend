import { useEffect } from "react";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { DescriptionPage, QuestionPage, ResultPage, StartPage } from "./pages";

const TestPage = () => {
  const path = useLocation().pathname;
  const navigate = useNavigate();

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
    // console.log("1");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (path === "/test") {
    return <Navigate to="/test/start" />;
  }

  return (
    <Routes>
      <Route path="start" element={<StartPage />} />
      <Route path="description" element={<DescriptionPage />} />
      <Route path="result" element={<ResultPage />} />
      <Route path="question/*" element={<QuestionPage />} />
    </Routes>
  );
};

export default TestPage;
