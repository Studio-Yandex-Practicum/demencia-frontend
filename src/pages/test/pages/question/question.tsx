import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Progress from "./components/progress";
import ClockImageQuestion from "./clock-image-question/clock-image-question";
import PaperImageQuestion from "./paper-image-question/paper-image-question";
import DateQuestion from "./date-question/date-question";
import EmailQuestion from "./email-question/email-question";
import ImagesIdentificationQuestion from "./images-identification-question/images-identification-question";
import MemoryTestQuestion from "./memory-test-question/memory-test-question";
import MoneyQuestion from "./money-question/money-question";
import TextQuestion from "./text-question/text-question";
import ThreeOptionsQuestion from "./three-options-question/three-options-question";
import TwoOptionsQuestion from "./two-options-question/two-options-question";
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
        <Route path="1" element={<TextQuestion number={1} />} />
        <Route path="2" element={<DateQuestion number={2} />} />
        <Route path="3" element={<TwoOptionsQuestion number={3} />} />
        <Route path="4" element={<EmailQuestion number={4} />} />
        <Route path="5" element={<ThreeOptionsQuestion number={5} />} />
        <Route path="6" element={<TwoOptionsQuestion number={6} />} />
        <Route path="7" element={<TwoOptionsQuestion number={7} />} />
        <Route path="8" element={<TextQuestion number={8} />} />
        <Route path="9" element={<TwoOptionsQuestion number={9} />} />
        <Route path="10" element={<TwoOptionsQuestion number={10} />} />
        <Route path="11" element={<ThreeOptionsQuestion number={11} />} />
        <Route path="12" element={<TwoOptionsQuestion number={12} />} />
        <Route path="13" element={<TwoOptionsQuestion number={13} />} />
        <Route path="14" element={<DateQuestion number={14} />} />
        <Route path="15" element={<ImagesIdentificationQuestion />} />
        <Route path="16" element={<TextQuestion number={16} />} />
        <Route path="17" element={<TextQuestion number={17} />} />
        <Route path="18" element={<MoneyQuestion number={18} />} />
        <Route path="19" element={<MemoryTestQuestion number={19} />} />
        <Route path="20" element={<PaperImageQuestion />} />
        <Route path="21" element={<ClockImageQuestion number={21} />} />
        <Route path="22" element={<CountriesQuestion number={22} />} />
        <Route path="23" element={<CirclesQuestion />} />
        <Route path="24" element={<TrianglesQuestion />} />
        <Route path="25" element={<TextQuestion number={25} />} />
      </Routes>
      <Progress pageID={pageID ? pageID[0] : ""} />
    </>
  );
};

export default QuestionPage;
