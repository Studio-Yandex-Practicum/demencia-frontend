import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { testBaseUrl } from "../../../../../utils";
import TextQuestion from "../../../for-myself/pages/question/text-question/text-question";
import Progress from "../../../for-myself/pages/question/components/progress";

const QuestionPage = () => {
  const path = useLocation().pathname;
  const pageID = path.match(/\d+/g);
  const baseUrl = testBaseUrl(true);

  if (path === `${baseUrl}/question`) {
    return <Navigate to={`${baseUrl}/question/1`} />;
  }

  return (
    <>
      <Routes>
        <Route path="1" element={<TextQuestion number={1} />} />
        <Route path="4" element={<TextQuestion number={4} />} />
      </Routes>
      <Progress pageID={pageID ? pageID[0] : ""} size={26} />
    </>
  );
};

export default QuestionPage;
