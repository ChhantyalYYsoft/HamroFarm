import React from "react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import Body from "../../components/layout/Body";

function Home() {
  return (
    <>
      <Header />
      <div className="main">
        <Body />
      </div>
      <Footer />
    </>
  );
}

export default Home;
