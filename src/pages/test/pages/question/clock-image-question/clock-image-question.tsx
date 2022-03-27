import QuestionHeader from "../components/question-header";
import QuestionTextUnfolding from "../components/question-text-unfolding";

const ClockImageQuestion: React.FC<{ number: number }> = ({ number }) => {
  return (
    <>
      <QuestionHeader number={number} />
      <QuestionTextUnfolding />
    </>
  );
};

export default ClockImageQuestion;
