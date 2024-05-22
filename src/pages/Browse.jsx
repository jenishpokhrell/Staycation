import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import MostPicked from "../Components/MostPicked";
import Backyard from "../Components/Backyard";
import Rooms from "../Components/Rooms";
import Kitchens from "../Components/Kitchens";

const Browse = () => {
  return (
    <>
      <Header />
      <div className="mx-32 my-20 w-80">
        <div className="flex items-center relative">
          <div>
            <p>
              <Link to="/">
                <span className=" opacity-50 hover:opacity-100">Home</span>
              </Link>
              <span className="mx-2">/</span>
              <span className=" text-blue">Browse by</span>
            </p>
          </div>
          <div className="text-center absolute left-45">
            <h2 className=" text-blue text">Browse Us</h2>
            {/* <p className="opacity-50">Gunung Batu, Indonesia</p> */}
          </div>
        </div>
      </div>
      <div className="-mt-32">
        <MostPicked />
        <Backyard />
        <Rooms />
        <Kitchens />
        <Footer />
      </div>
    </>
  );
};

export default Browse;
