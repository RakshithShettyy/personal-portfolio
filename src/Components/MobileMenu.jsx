import React from "react";
import useSticky from "../Utils/use-sticky";
import Sidebar from "./SideBar";
import { Link } from "react-router-dom";

const MobileMenu = ({ bg, transparent = true }) => {
  const { headerSticky } = useSticky();
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  return (
    <React.Fragment>
      <div
        id="header-sticky-mobile"
        className={`tp-md-menu ${transparent ? "header-transparent" : ""} pt-15 
    ${bg ? bg : ""} ${headerSticky ? "header-sticky" : ""}`}>
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-6">
              <div className="tp-logo">
                <Link to="/">
                  <img
                    src="/rakshith-logo.png"
                    className="rakshith-logo-mobile"
                    alt=""
                  />
                </Link>
              </div>
            </div>
            <div className="col-6">
              <div className="bar text-end">
                <button
                  className="tp-menu-bar"
                  onClick={() => setSidebarOpen(true)}
                  type="button">
                  <i className="fal fa-bars"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* off canvas start */}
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      {/* off canvas end */}
    </React.Fragment>
  );
};

export default MobileMenu;
