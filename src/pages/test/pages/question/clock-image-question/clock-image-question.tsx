import QuestionHeader from "../components/question-header";

const ClockImageQuestion: React.FC<{ number: number }> = ({ number }) => {
  return (
    <>
      <QuestionHeader number={number} />
    </>
  );
};

export default ClockImageQuestion;
