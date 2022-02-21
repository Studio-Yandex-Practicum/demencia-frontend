import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Progress from "./progress";

const QuestionPage = () => {
  const path = useLocation().pathname;
  const pageID = path.match(/\d/g);

  if (path === "/test/question") {
    return <Navigate to="/test/question/1" />;
  }

  return (
    <>
      <Routes>
        <Route path=":id" element={<h2>Question</h2>} />
      </Routes>
      <Progress pageID={pageID ? pageID[0] : ""} />
    </>
  );
};

export default QuestionPage;
