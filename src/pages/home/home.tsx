import React from "react";
import Header from "./header/header";
import Main from "./main/main";
import Footer from "./footer/footer";

const HomePage: React.FC = () => {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default HomePage;
