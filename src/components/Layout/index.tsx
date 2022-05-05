import React from "react";
import Faq from "../Faq";
import Header from "../Header";
import Main from "../Main";
import Sections from "../Sections";

const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <Main />
      <Sections />
      <Faq />
    </>
  );
};

export default Layout;
