import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Progress from "./components/progress";
import ClockImageQuestion from "./clock-image-question/clock-image-question";
import PaperImageQuestion from "./paper-image-question/paper-image-question";
import DateQuestion from "../../../pages/question/date-question/date-question";
import EmailQuestion from "../../../pages/question/email-question/email-question";
import ImagesIdentificationQuestion from "./images-identification-question/images-identification-question";
import MemoryTestQuestion from "./memory-test-question/memory-test-question";
import MoneyQuestion from "./money-question/money-question";
import TextQuestion from "../../../pages/question/text-question/text-question";
import ThreeOptionsQuestion from "./three-options-question/three-options-question";
import TwoOptionsQuestion from "../../../pages/question/two-options-question/two-options-question";
import CountriesQuestion from "./countries-question/countries-question";
import CirclesQuestion from "./circles-question/circles-question";
import TrianglesQuestion from "./triangles-question/triangles-question";

const QuestionPage = () => {
  const path = useLocation().pathname;
  const pageID = path.match(/\d+/g);

  if (path === "/test/question") {
    return <Navigate to="/test/question/1" />;
  }

  return (
    <>
      <Routes>
        <Route
          path="1"
          element={<TextQuestion forClosePerson={false} number={1} />}
        />
        <Route
          path="2"
          element={<DateQuestion forClosePerson={false} number={2} />}
        />
        <Route
          path="3"
          element={<TwoOptionsQuestion forClosePerson={false} number={3} />}
        />
        <Route
          path="4"
          element={<EmailQuestion forClosePerson={false} number={4} />}
        />
        <Route path="5" element={<ThreeOptionsQuestion number={5} />} />
        <Route
          path="6"
          element={<TwoOptionsQuestion forClosePerson={false} number={6} />}
        />
        <Route
          path="7"
          element={<TwoOptionsQuestion forClosePerson={false} number={7} />}
        />
        <Route
          path="8"
          element={<TextQuestion forClosePerson={false} number={8} />}
        />
        <Route
          path="9"
          element={<TwoOptionsQuestion forClosePerson={false} number={9} />}
        />
        <Route
          path="10"
          element={<TwoOptionsQuestion forClosePerson={false} number={10} />}
        />
        <Route path="11" element={<ThreeOptionsQuestion number={11} />} />
        <Route
          path="12"
          element={<TwoOptionsQuestion forClosePerson={false} number={12} />}
        />
        <Route
          path="13"
          element={<TwoOptionsQuestion forClosePerson={false} number={13} />}
        />
        <Route
          path="14"
          element={<DateQuestion forClosePerson={false} number={14} />}
        />
        <Route
          path="15"
          element={<ImagesIdentificationQuestion number={15} />}
        />
        <Route
          path="16"
          element={<TextQuestion forClosePerson={false} number={16} />}
        />
        <Route
          path="17"
          element={<TextQuestion forClosePerson={false} number={17} />}
        />
        <Route path="18" element={<MoneyQuestion number={18} />} />
        <Route path="19" element={<MemoryTestQuestion number={19} />} />
        <Route path="20" element={<PaperImageQuestion number={20} />} />
        <Route path="21" element={<ClockImageQuestion number={21} />} />
        <Route path="22" element={<CountriesQuestion number={22} />} />
        <Route path="23" element={<CirclesQuestion number={23} />} />
        <Route path="24" element={<TrianglesQuestion number={24} />} />
        <Route
          path="25"
          element={<TextQuestion forClosePerson={false} number={25} />}
        />
      </Routes>
      <Progress pageID={pageID ? pageID[0] : ""} size={25} />
    </>
  );
};

export default QuestionPage;
