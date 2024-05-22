import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { BiBath, BiBed } from "react-icons/bi";
import { LuSofa } from "react-icons/lu";
import { MdOutlineDining, MdOutlineAir } from "react-icons/md";
import { AiOutlineWifi } from "react-icons/ai";
import { CgSmartHomeRefrigerator } from "react-icons/cg";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import Story from "../Components/Story";
import Treasure from "../Components/Treasure";

const SilverRain = () => {
  var price = 128;

  const [number, setNumber] = useState(1);

  if (number == 1 || number == 0) {
    var str = "night";
  } else {
    var str = "nights";
  }

  return (
    <>
      <Header />
      <div className="mx-32 my-24 w-80">
        <div className="flex items-center relative mb-10">
          <div>
            <p>
              <Link to="/">
                <span className=" opacity-50 hover:opacity-100">Home</span>
              </Link>
              <span className="mx-2">/</span>
              <span className=" text-blue">House Details</span>
            </p>
          </div>
          <div className="text-center absolute left-40">
            <h2 className=" text-blue text">Silver Rain</h2>
            <p className="opacity-50">Bandung, Indonesia</p>
          </div>
        </div>
        <div className="flex w-full">
          <div className="mt-10">
            <img
              src="./assets/42.jpg"
              alt=""
              width={580}
              height={820}
              className="rounded-3xl"
            />
          </div>
          <div className="mt-10 ml-3 ">
            <div className="pb-2">
              <img
                src="./assets/43.jpg"
                alt=""
                width={630}
                height={400}
                className="rounded-3xl"
              />
            </div>
            <div>
              <img
                src="./assets/8.jpg"
                alt=""
                width={630}
                height={400}
                className="rounded-3xl"
              />
            </div>
          </div>
        </div>
        <div className="flex basis-2/4">
          <div className="mt-10 w-2/4 text-justify mr-10">
            <h3 className="text-blue font-semibold">About the place</h3>
            <p className=" opacity-50 leading-7 mt-4">
              Silver Rain is a minimalist subgenre of techno music. It is
              characterized by a stripped-down aesthetic that exploits the use
              of repetition and understated development. Silver Rain is thought
              to have been originally developed in the early 1990s by
              Detroit-based producers Robert Hood and Daniel Bell.
              <p className="mt-2">
                Such trends saw the demise of the soul-infused techno that
                typified the original Detroit sound. Robert Hood has noted that
                he and Daniel Bell both realized something was missing from
                techno in the post-rave era.
              </p>
              <p className="mt-2">
                Design is a plan or specification for the construction of an
                object or system or for tho implementation of an activity or
                process, or tho result of that plan or specification in the form
                of a prototype, product or process. The national agency for
                design: enabling Singapore to use design for economic growth and
                to mako lives bettor.
              </p>
            </p>
            <div className=" flex mt-10 ">
              <div className="pr-10">
                <BiBed size={35} className="text-pink-400 mb-3" />
                <p>
                  <span className="text-blue font-semibold">5 </span>
                  <span className="opacity-40">bedrooms</span>
                </p>
              </div>
              <div className="pr-10">
                <LuSofa size={35} className="text-pink-400 mb-3" />
                <p>
                  <span className="text-blue font-semibold">1 </span>
                  <span className="opacity-40">living room</span>
                </p>
              </div>
              <div className="pr-10">
                <BiBath size={35} className="text-pink-400 mb-3" />
                <p>
                  <span className="text-blue font-semibold">3 </span>
                  <span className="opacity-40">bathroom</span>
                </p>
              </div>
              <div className="pr-10">
                <MdOutlineDining size={35} className=" text-pink-400 mb-3" />
                <p>
                  <span className="text-blue font-semibold">1 </span>
                  <span className="opacity-40">dining room</span>
                </p>
              </div>
            </div>
            <div className=" flex mt-10 ">
              <div className="pr-14">
                <AiOutlineWifi size={35} className="text-pink-400 mb-3" />
                <p>
                  <span className="text-blue font-semibold">10 </span>
                  <span className="opacity-40">mbp/s</span>
                </p>
              </div>
              <div className="pr-12">
                <MdOutlineAir size={35} className="text-pink-400  mb-3" />
                <p>
                  <span className="text-blue font-semibold">7 </span>
                  <span className="opacity-40">unit ready</span>
                </p>
              </div>
              <div className="pr-12">
                <CgSmartHomeRefrigerator
                  size={35}
                  className="text-pink-400 mb-3"
                />
                <p>
                  <span className="text-blue font-semibold">2 </span>
                  <span className="opacity-40">refrigator</span>
                </p>
              </div>
              <div className="pr-10">
                <PiTelevisionSimpleBold
                  size={35}
                  className="text-pink-400 mb-3"
                />
                <p>
                  <span className="text-blue font-semibold">4 </span>
                  <span className="opacity-40">television</span>
                </p>
              </div>
            </div>
          </div>
          <div className="mt-10 ml-10 border-2 drop-shadow w-2/4 p-16 rounded-2xl">
            <h3 className="text-blue font-semibold">Start Booking</h3>
            <p className="text-4xl mt-8">
              <span className="text-green">${price}</span>{" "}
              <span className=" opacity-30">per night</span>
            </p>
            <div className="mt-8">
              <p className="text-blue text-xl">How long will you stay?</p>
            </div>
            <div className="mt-4">
              <div className="flex">
                <div className="border-2 py-2 px-5 bg-orange cursor-pointer text-3xl rounded-lg">
                  <button
                    onClick={() => setNumber(number - 1)}
                    className="button "
                  >
                    -
                  </button>
                </div>
                <div>
                  <p className="border-2 w-52 p-3 text-center text-blue bg-slate-200 outline-0 rounded-lg">
                    {number} {str}
                  </p>
                </div>
                <div className="border-2 py-2 px-5 bg-green cursor-pointer text-3xl rounded-lg">
                  <button
                    onClick={() => setNumber(number + 1)}
                    className="button "
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-md">
                <span className=" opacity-30">You will pay </span>
                <span className="text-blue">${price * number} USD </span>
                <span className="opacity-30">per </span>
                <span className="text-blue">
                  {number} {str}.
                </span>
              </p>
            </div>
            <div>
              <button className="rounded-md py-3 px-7 text-white font-semibold bg-bu my-10 drop-shadow">
                Continue to book
              </button>
            </div>
          </div>
        </div>
      </div>
      <Treasure />
      <Story />
      <Footer />
    </>
  );
};

export default SilverRain;
