import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { DescriptionPage, QuestionPage, ResultPage, StartPage } from "./pages";

const TestPage = () => {
  const path = useLocation().pathname;

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
