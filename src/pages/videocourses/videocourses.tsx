import { FC } from "react";
import Header from "./header/header";
import InformationGuide from "./information-guide/information-guide";
import { Main } from "./main/main";
import { Partners } from "./partners/partners";

const VideoCoursesPage: FC = () => {
  return (
    <>
      <Header />
      <Main />
      <InformationGuide />
      <Partners />
    </>
  );
};

export default VideoCoursesPage;
