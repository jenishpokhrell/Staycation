import React from "react";

const Treasure = () => {
  return (
    <div className="mx-32 mb-32 w-80">
      <div className="mt-32 mb-6">
        <h3 className="text-blue font-semibold">Treasure to Choose</h3>
      </div>
      <div className="flex justify-between ">
        <div className="pr-7">
          <div className=" drop-shadow-2xl">
            <img src="./assets/47.jpg" alt="" className="rounded-3xl" />
          </div>
          <div className="mt-5 ml-1">
            <h5 className="text-blue">Ocean View</h5>
            <p className=" opacity-50">Scenery</p>
          </div>
        </div>
        <div className="pr-7">
          <div className=" drop-shadow-2xl">
            <img src="./assets/46.jpg" alt="" className="rounded-3xl" />
          </div>
          <div className="mt-5 ml-1">
            <h5 className="text-blue">Dog Clubs</h5>
            <p className=" opacity-50">Pool</p>
          </div>
        </div>
        <div className="pr-7">
          <div className=" drop-shadow-2xl">
            <img src="./assets/45.jpg" alt="" className="rounded-3xl" />
          </div>
          <div className="mt-5 ml-1">
            <h5 className="text-blue">Labour & Wait</h5>
            <p className=" opacity-50">Shopping</p>
          </div>
        </div>
        <div>
          <div className=" drop-shadow-2xl">
            <img src="./assets/44.jpg" alt="" className="rounded-3xl" />
          </div>
          <div className="mt-5 ml-1">
            <h5 className=" text-blue">Snorkeling</h5>
            <p className=" opacity-50">Beach</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Treasure;
