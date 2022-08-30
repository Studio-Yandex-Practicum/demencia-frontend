import { FC } from "react";
import Header from "./header/header";
import InformationGuide from "./information-guide/information-guide";
import { Main } from "./main/main";

const VideoCoursesPage: FC = () => {
  return (
    <>
      <Header />
      <Main />
      <InformationGuide />
    </>
  );
};

export default VideoCoursesPage;
