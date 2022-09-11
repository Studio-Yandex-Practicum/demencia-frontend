import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { testBaseUrl } from "../../../../../utils";
import Progress from "../../../for-myself/pages/question/components/progress";
import TextQuestion from "../../../pages/question/text-question/text-question";

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
        <Route
          path="1"
          element={<TextQuestion number={1} forClosePerson={true} />}
        />
        <Route
          path="4"
          element={<TextQuestion number={4} forClosePerson={true} />}
        />
      </Routes>
      <Progress pageID={pageID ? pageID[0] : ""} size={26} />
    </>
  );
};

export default QuestionPage;
