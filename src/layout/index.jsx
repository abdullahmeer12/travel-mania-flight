import React from "react";
import Header from "@/Components/Header/Header";
import Footer from "@/Components/Footer/Footer";

const index = ({children}) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default index;
