import React from "react";
import Navbar from "../Components/Navbar";
import MobileMenu from "../Components/MobileMenu";
import HomeContent from "./HomeContent";

const Main = () => {
  return (
    <>
      {window.innerWidth >= 992 ? (
        <div>
          <Navbar />
          <HomeContent />
        </div>
      ) : (
        <div>
          <MobileMenu transparent={false} />
          <HomeContent />
        </div>
      )}
    </>
  );
};

export default Main;
