import React from "react";
import { motion } from "framer-motion";

const MostPicked = () => {
  return (
    <div className="mx-32 w-80" id="mostpicked">
      <motion.div
        className="mt-56"
        initial={{ opacity: 0, scale: 0 }}
        animate="show"
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          // repeat:Infinity,
          duration: 1,
          delay: 0.2,
          ease: "linear",
          type: "spring",
        }}
      >
        <h3 className="text-blue">Most Picked</h3>
      </motion.div>
      <div className=" grid grid-cols-3 grid-flow-row gap-4">
        <motion.div
          className="w-full h-full position"
          initial={{ scale: 0 }}
          animate="show"
          whileInView={{ scale: 1 }}
          transition={{
            // repeat:Infinity,
            duration: 1,
            delay: 0.4,
            ease: "easeOut",
            type: "spring",
          }}
        >
          <div className=" drop-shadow-2xl">
            <img src="./assets/48.jpg" alt="" className="my-4 rounded-3xl" />
          </div>
          <div className="content1">
            <h5>Blue Origin Fams</h5>
            <p>Jakarta, Indonesia</p>
          </div>
        </motion.div>
        <motion.div
          className="w-full h-2/4 position"
          initial={{ scale: 0 }}
          animate="show"
          whileInView={{ scale: 1 }}
          transition={{
            // repeat:Infinity,
            duration: 1,
            delay: 0.8,
            ease: "easeOut",
            type: "spring",
          }}
        >
          <div className=" drop-shadow-2xl">
            <img src="./assets/28.jpg" alt="" className="m-2 p-2 rounded-3xl" />
          </div>
          <div className="content2">
            <h5>Ocean Land</h5>
            <p>Bandung, Indonesia</p>
          </div>
          <div className=" drop-shadow-2xl">
            <img
              src="./assets/32.jpg"
              alt=""
              className="m-2 p-2 rounded-3xl "
            />
          </div>
          <div className="content3">
            <h5>Vinna Villa</h5>
            <p>Malang, Indonesia</p>
          </div>
        </motion.div>
        <motion.div
          className="w-full position"
          initial={{ scale: 0 }}
          animate="show"
          whileInView={{ scale: 1 }}
          transition={{
            duration: 1,
            delay: 1,
            ease: "easeOut",
            type: "spring",
          }}
        >
          <div className=" drop-shadow-2xl">
            <img
              src="./assets/26.jpg"
              alt=""
              className="m-2 p-2 rounded-3xl w-full"
            />
          </div>
          <div className="content4">
            <h5>Stark House</h5>
            <p>Malang, Indonesia</p>
          </div>
          <div className=" drop-shadow-2xl">
            <img
              src="./assets/27.jpg"
              alt=""
              className="m-2 p-2 rounded-3xl w-full"
            />
          </div>
          <div className="content5">
            <h5>Bobox</h5>
            <p>Medan, Indonesia</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MostPicked;
