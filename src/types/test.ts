type TQuestionData = {
  question: string;
  first?: string;
  second?: string;
  third?: string;
  needFirstDescription?: boolean;
};
export type TTestData = {
  [key: number]: TQuestionData;
};
