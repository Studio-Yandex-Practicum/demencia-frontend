import { Navigate, Route, Routes, useLocation } from "react-router-dom";

const QuestionPage = () => {
  const path = useLocation().pathname;

  if (path === "/test/question") {
    return <Navigate to="/test/question/1" />;
  }

  return (
    <>
      <Routes>
        <Route path=":id" element={<h2>Question</h2>} />
      </Routes>
      <h1>Progress</h1>
    </>
  );
};

export default QuestionPage;
