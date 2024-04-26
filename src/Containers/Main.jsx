import React from "react";
import HomeContent from "./HomeContent";

const Main = () => {
  return (
    <>
      {window.innerWidth >= 992 ? (
        <div>
          <HomeContent />
        </div>
      ) : (
        <div>
          {/* <MobileMenu transparent={false} /> */}
          <HomeContent />
        </div>
      )}
    </>
  );
};

export default Main;
