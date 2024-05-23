import React from "react";
import { PiSuitcaseRollingFill } from "react-icons/pi";
import { HiOutlineCamera } from "react-icons/hi";
import { SlLocationPin } from "react-icons/sl";
import { TfiArrowDown } from "react-icons/tfi";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="flex  drop-shadow-2xl h-full">
      <div className="w-2/4 relative top-24 mx-16 px-20 py-6 ">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate="show"
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 1,
            delay: 0.2,
            ease: "easeOut",
            type: "spring",
          }}
        >
          <h2 className="text-3xl font-black text-blue drop-shadow-2xl">
            Forget Busy Work,
          </h2>
          <h2 className="text-3xl font-black pt-2 text-blue drop-shadow-2xl">
            {" "}
            Start Next Vacation.
          </h2>
        </motion.div>
        <motion.div
          className="pt-8 "
          initial={{ scale: 0, opacity: 0 }}
          animate="show"
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 1,
            delay: 0.4,
            ease: "easeOut",
            type: "spring",
          }}
        >
          <p className="font-light drop-shadow-md ">
            We provide what you need to enjoy your holiday with family. Time to
            make another memorable moments.
          </p>
        </motion.div>
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate="show"
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 1,
            delay: 0.6,
            ease: "easeOut",
            type: "spring",
          }}
        >
          <button className="rounded-md py-2 px-7 text-white font-semibold bg-bu my-10">
            Show me now
          </button>
        </motion.div>
        <motion.div
          className="mt-8 flex"
          initial={{ scale: 0, opacity: 0 }}
          animate="show"
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 1,
            delay: 0.8,
            ease: "easeOut",
            type: "spring",
          }}
        >
          <div>
            <PiSuitcaseRollingFill
              size={30}
              className="drop-shadow-2x1 text-pink-400 shd"
            />
            <h5 className="text-blue font-semibold drop-shadow-2xl shd">
              80,409
            </h5>
            <h6 className=" text-gray-400 drop-shadow-2xl shd">Travelers</h6>
          </div>

          <div className="ml-16">
            <HiOutlineCamera
              size={30}
              className="drop-shadow-2x1 text-pink-400 shd"
            />
            <h5 className="text-blue font-semibold drop-shadow-2xl shd">862</h5>
            <h6 className=" text-gray-400 drop-shadow-2xl shd">Treasure</h6>
          </div>

          <div className="mx-16">
            <SlLocationPin
              size={30}
              className=" icons drop-shadow-2x1 text-pink-400 font-bold shd"
            />
            <h5 className="text-blue font-semibold drop-shadow-2xl shd">
              1,492
            </h5>
            <h6 className=" text-gray-400 drop-shadow-2xl shd">Cities</h6>
          </div>
        </motion.div>
        <div className="p-4 rounded-full bg-bu absolute left-120 -bottom-20 animate-bounce border-2 drop-shadow-2xl">
          <TfiArrowDown size={30} className="text-white" />
        </div>
      </div>
      <div className="w-3/4 h-96 relative top-32 mx-40 px-20 py-6 border-2 border-grey-500 drop-shadow rounded-3xl rounded-tl-large">
        <motion.img
          initial={{ x: 500, opacity: 0 }}
          animate="show"
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            duration: 1.5,
            delay: 1,
            ease: "easeOut",
            type: "spring",
          }}
          src="./assets/29.jpg"
          alt=""
          className="rounded-tl-large rounded-2xl absolute -top-10  -left-24"
        />
      </div>
    </div>
  );
};

export default Hero;
