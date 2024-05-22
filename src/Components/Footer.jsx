import React from "react";

const Footer = () => {
  return (
    <>
      <hr className="mt-24" />
      <div className="mx-32 mt-20 mb-10">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h3 className="mb-3">
              <span className=" text-bu">Stay</span>
              <span className="text-blue">cation.</span>
            </h3>
            <p className=" opacity-50">
              We kaboom your beauty holiday <br /> instant and memorable.
            </p>
          </div>
          <div>
            <h3 className="text-blue mb-5 font-semibold text-xl">
              For Beginners
            </h3>
            <p className=" opacity-50 pt-2">New Account</p>
            <p className=" opacity-50 pt-2">Start Booking a Room</p>
            <p className=" opacity-50 pt-2">Use Payments</p>
          </div>
          <div>
            <h3 className="text-blue mb-5 font-semibold text-xl">Explore Us</h3>
            <p className=" opacity-50 pt-2">Our Career</p>
            <p className=" opacity-50 pt-2">Privacy</p>
            <p className=" opacity-50 pt-2">Terms & Conditions</p>
          </div>
          <div>
            <h3 className="text-blue mb-5 font-semibold text-xl">Contact Us</h3>
            <p className=" opacity-50 pt-2">support@staycation.id</p>
            <p className=" opacity-50 pt-2">021-2208-1996</p>
            <p className=" opacity-50 pt-2">Staycation, Kemang, Jakarta</p>
          </div>
        </div>
        <hr />
        <div>
          <p className=" opacity-50 text-center mt-10">
            Copyright 2023 &#183; All Rights Reserved &#183; Staycation
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
