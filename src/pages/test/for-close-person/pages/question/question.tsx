import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { testBaseUrl } from "../../../../../utils";
import Progress from "../../../for-myself/pages/question/components/progress";
import DateQuestion from "../../../pages/question/date-question/date-question";
import EmailQuestion from "../../../pages/question/email-question/email-question";
import TextQuestion from "../../../pages/question/text-question/text-question";
import TwoOptionsQuestion from "../../../pages/question/two-options-question/two-options-question";

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
          path="2"
          element={<DateQuestion number={2} forClosePerson={true} />}
        />
        <Route
          path="3"
          element={<TwoOptionsQuestion number={3} forClosePerson={true} />}
        />
        <Route
          path="4"
          element={<TextQuestion number={4} forClosePerson={true} />}
        />
        <Route
          path="5"
          element={<EmailQuestion number={5} forClosePerson={true} />}
        />
        <Route
          path="6"
          element={<TwoOptionsQuestion number={6} forClosePerson={true} />}
        />
        <Route
          path="7"
          element={<TwoOptionsQuestion number={7} forClosePerson={true} />}
        />
        <Route
          path="8"
          element={<TwoOptionsQuestion number={8} forClosePerson={true} />}
        />
        <Route
          path="9"
          element={<TwoOptionsQuestion number={9} forClosePerson={true} />}
        />
        <Route
          path="10"
          element={<TwoOptionsQuestion number={10} forClosePerson={true} />}
        />
        <Route
          path="11"
          element={<TwoOptionsQuestion number={11} forClosePerson={true} />}
        />
        <Route
          path="12"
          element={<TwoOptionsQuestion number={12} forClosePerson={true} />}
        />
        <Route
          path="13"
          element={<TwoOptionsQuestion number={13} forClosePerson={true} />}
        />
        <Route
          path="14"
          element={<TwoOptionsQuestion number={14} forClosePerson={true} />}
        />
        <Route
          path="15"
          element={<TwoOptionsQuestion number={15} forClosePerson={true} />}
        />
        <Route
          path="16"
          element={<TwoOptionsQuestion number={16} forClosePerson={true} />}
        />
        <Route
          path="17"
          element={<TwoOptionsQuestion number={17} forClosePerson={true} />}
        />
        <Route
          path="18"
          element={<TwoOptionsQuestion number={18} forClosePerson={true} />}
        />
        <Route
          path="19"
          element={<TwoOptionsQuestion number={19} forClosePerson={true} />}
        />
        <Route
          path="20"
          element={<TwoOptionsQuestion number={20} forClosePerson={true} />}
        />
        <Route
          path="21"
          element={<TwoOptionsQuestion number={21} forClosePerson={true} />}
        />
        <Route
          path="22"
          element={<TwoOptionsQuestion number={22} forClosePerson={true} />}
        />
        <Route
          path="23"
          element={<TwoOptionsQuestion number={23} forClosePerson={true} />}
        />
        <Route
          path="24"
          element={<TwoOptionsQuestion number={24} forClosePerson={true} />}
        />
        <Route
          path="25"
          element={<TwoOptionsQuestion number={25} forClosePerson={true} />}
        />
        <Route
          path="26"
          element={<TwoOptionsQuestion number={26} forClosePerson={true} />}
        />
      </Routes>
      <Progress pageID={pageID ? pageID[0] : ""} size={26} />
    </>
  );
};

export default QuestionPage;
