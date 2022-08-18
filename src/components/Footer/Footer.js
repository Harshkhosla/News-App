import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="container">
        <footer className="d-flex justify-content-between flex-wrap py-3 my-4 border-top ">
          <div className="col-md-6 d-flex align-items-center text-center">            
            <span className="text-clr"> © Copyrights 2021 - 2022 DIILLI DARBAR TIMES</span>
          </div>
          <div className="col-md-6 pt-0 d-flex justify-content-end terms-privacy">
            <div className="ms-3 text-center"><a className="text-clr text-decoration-none" href="#">Terms & Conditions</a></div>
            <div className="ms-5 text-center"><a className="text-clr text-decoration-none" href="#">Privacy Policy</a></div>
            </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;
